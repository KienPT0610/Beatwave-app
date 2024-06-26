import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState, useEffect, createContext, useContext } from "react";

interface ChildProps {
  account: string | null;
  balance: string | null;
  disconnectMetaMask: () => void;
  handleConnectMetaMask: () => void;
}

const Account: React.FC<ChildProps> = ({
  account,
  balance,
  disconnectMetaMask,
  handleConnectMetaMask,
}) => {
  return (
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
    backgroundColor: "#F19373",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Account;
