import React, { useState, useEffect, createContext, useContext, Children } from "react";
import Web3 from "web3";
import { RegisteredSubscription } from "web3/lib/commonjs/eth.exports";
import Account from "../../components/Header/Wallet/Account";

declare global {
  interface Window {
    ethereum: any;
  }
}


const MetaMaskConnection = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

  useEffect(() => {
    checkMetaMaskInstalled();
  }, []);

  const checkMetaMaskInstalled = async () => {
    if (window.ethereum) {
      setIsMetaMaskInstalled(true);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const defaultAccount = accounts[0];
        setAccount(defaultAccount);
        await getBalance(defaultAccount, web3);
      } catch (error) {
        console.error("Failed to connect to MetaMask:", error);
        alert(
          "Failed to connect to MetaMask. Please try again or check your MetaMask extension."
        );
      }
    } else {
      alert(
        "MetaMask is not installed. Please install it to use this feature."
      );
    }
  };

  const getBalance = async (
    account: string,
    web3: Web3<RegisteredSubscription>
  ) => {
    try {
      const balanceInWei = await web3.eth.getBalance(account);
      const balanceInEther = web3.utils.fromWei(balanceInWei, "ether");
      setBalance(balanceInEther);
    } catch (error) {
      console.error("Failed to fetch balance:", error);
      setBalance(null);
    }
  };

  const disconnectMetaMask = () => {
    setAccount(null);
    setBalance(null);
  };
  
  const handleConnectMetaMask = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const defaultAccount = accounts[0];
      setAccount(defaultAccount);
      await getBalance(defaultAccount, web3);
      window.location.reload();
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
      alert(
        "Failed to connect to MetaMask. Please try again or check your MetaMask extension."
      );
    }
  };


  return (
    <Account account={account} balance={balance} disconnectMetaMask={disconnectMetaMask} handleConnectMetaMask={handleConnectMetaMask} />
  );
};

export default MetaMaskConnection;
