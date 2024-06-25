import React, { useState, useEffect, createContext, useContext } from "react";
import Web3 from "web3";
import { RegisteredSubscription } from "web3/lib/commonjs/eth.exports";
import ReadContract from "../Home/ReadContract/ReadContract";

declare global {
  interface Window {
    ethereum: any;
  }
}

const MetaMaskContext = createContext<any>(null);
export const useMetaMask = () => useContext(MetaMaskContext);

const MetaMaskConnection = ({ children }: { children: React.ReactNode }) => {
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
    } catch (error) {
      console.error("Failed to connect to MetaMask:", error);
      alert(
        "Failed to connect to MetaMask. Please try again or check your MetaMask extension."
      );
    }
  };

  return (
    <MetaMaskContext.Provider
      value={{ account, balance, handleConnectMetaMask, disconnectMetaMask }}
    >
      <div style={styles.accountInfo}>
        {account && (
          <>
            <span style={styles.account}>{account}</span>
            <span style={styles.balance}>{balance} ETH</span>
          </>
        )}
        {account ? (
          <button onClick={disconnectMetaMask} style={styles.button}>
            Disconnect
          </button>
        ) : (
          <button onClick={handleConnectMetaMask} style={styles.button}>
            Connect to MetaMask
          </button>
        )}
      </div>
    </MetaMaskContext.Provider>
  );
};

const styles = {
  accountInfo: {
    display: "flex",
    alignItems: "center",
  },
  account: {
    marginRight: "10px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
  },
  balance: {
    marginRight: "10px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MetaMaskConnection;
