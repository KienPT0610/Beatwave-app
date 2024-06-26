import React, { useState, useEffect } from "react";
import Search from "./Search";
import Title from "./Title/Title";
import MetaMaskConnection from "../../containers/MetaMask/MetaMaskData";



const Header: React.FC = () => {  
  return (
    <header style={styles.header}>
      <Title />
      <Search/>
      <MetaMaskConnection />
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#FCD9C4",
    borderBottom: "1px solid #dee2e6",
    height: "70px",
  },
};

export default Header;
