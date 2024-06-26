import React, { useEffect, useState } from "react";
import Web3 from "web3";

interface ChildProps {
    beatCountId: number | null;
    contractAddr: string | null;
    contractAdmin: string | null;

}

const InformationBar: React.FC<ChildProps> = ({beatCountId, contractAddr, contractAdmin}) => {
    return (
        <div style={styles.infor}>
            <div style={styles.address}><b>Total Beats: </b>{beatCountId}</div>
            <div style={styles.address}><b>Total Beats Saling: </b>0</div>
            <div style={styles.address}><b>Contract address: </b>{contractAddr !== null ? contractAddr : "loading..."}</div>
            <div style={styles.address}><b>Admin system: </b>{contractAdmin !== null ? contractAdmin : "loading..."}</div>
            <div style={styles.address}><b>Network: </b>BSCTESTNET</div>
        </div>
    );
};

const styles = {
    infor: {
        width: '100%', 
        display: 'flex',
        // justifyContent: 'space-between', 
        alignItems: 'center',
        paddingTop: '10px',
    },
    address: {
        // flex: 1, 
        margin: '0 10px', 
        padding: '10px',
        backgroundColor: "#FCD9C4",
        borderRadius: "20px",
        // textAlign: 'center', 
    }
}

export default InformationBar;
