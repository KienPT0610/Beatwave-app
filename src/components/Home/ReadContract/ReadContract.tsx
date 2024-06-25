import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contract from "../../contract/beatwave.json";

const contractABI = contract.abi;
const contractAddress = contract.address;

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const ReadContract = () => {
    const [contractAdmin, setContractAdmin] = useState<string | null>(null);
    const [beatCountId, setbeatCountId] = useState<Number | null>(null);
    const [contractAddr, setContractAddr] = useState<string | null>(null);

    useEffect(() => {
        fetchContractAdmin();
    }, []);

    const fetchContractAdmin = async () => {
        if (window.ethereum) { 
            const web3 = new Web3(window.ethereum);
            const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
            try {
                const admin = await contractInstance.methods.admin().call();
                setContractAdmin(String(admin));
                const beatCountId = await contractInstance.methods.beatCountId().call();
                setbeatCountId(Number(beatCountId));
                setContractAddr(contractAddress)
            } catch (error) {
                console.error('Failed to fetch contract admin:', error);
            }
        } else {
            console.error('window.ethereum is not available');
        }
    }

    return (
        <div style={styles.infor}>
            <div style={styles.address}><b>Total Beats: </b>{Number(beatCountId)}</div>
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

export default ReadContract;
