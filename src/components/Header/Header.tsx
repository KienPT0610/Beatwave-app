import React, { useState, useEffect } from "react";
import MetaMask from "./MetaMask";
import Search from "./Search";
import MetaMaskConnection from "./MetaMask";
import ReadContract from "../Home/ReadContract/ReadContract";
import { SiMusicbrainz } from "react-icons/si";

const Header = () => {
  return (
    <header style={styles.header}>
      <p style={styles.title}><SiMusicbrainz/>Beat Wave</p>
      <Search />
      <MetaMaskConnection>
        <></>
      </MetaMaskConnection>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #dee2e6",
    height: "70px",
  },
  title: {
    marginTop: '30px',
    fontSize: "40px", 
    color: '#780062'
  },
};

export default Header;
