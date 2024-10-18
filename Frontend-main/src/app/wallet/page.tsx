'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13

const WalletConnectButton = () => {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); 

  const connectWallet = useCallback(async () => {
    if (window.ethereum) {
      try {
        setLoading(true);
        // Request account access if needed
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        setAccount(accounts[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
        setLoading(false);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
  }, []);

  useEffect(() => {
    if (account) {
      router.push('/dashboard/general');
    }
  }, [account, router]);

  useEffect(() => {
    const handleAccountsChanged = (accounts: string | any[]) => {
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        setAccount(null);
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
      <div className="m-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">Connect wallet</h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
        <ul className="my-4 space-y-3">
          <li>
            <button
              onClick={connectWallet}
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              <svg aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726" />
                <path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625" />
                {/* Other paths omitted for brevity */}
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">{loading ? 'Connecting...' : 'Connect'}</span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletConnectButton;
