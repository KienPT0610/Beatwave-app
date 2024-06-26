import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Web3 from "web3";

const Nav: React.FC = () => {
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/home');
    }

    const handleClickManage = async () => {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            navigate('/manage-beat');
          } catch (error) {
            console.error("Failed to connect to MetaMask:", error);
            alert(
              "Failed to connect to MetaMask. Please try again or check your MetaMask extension."
            );
          }
    }

    const handleClickUpload = () => {
        navigate('/upload');
    }

    const handleClickTransferOwner = () => {
        navigate('/transfer-owner');
    }

    return (
        <div style={styles.navbar}>
            <Button name="Home" onClick={handleClickHome}/>
            <Button name="Beat of me" onClick={handleClickManage}/>
            <Button name="Upload beat" onClick={handleClickUpload}/>
            <Button name="Transfer Owner Beat" onClick={handleClickTransferOwner}/>
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#FCD9C4',
        justifyContent: 'center',
        display: 'flex',
        witdth: '200px',
        height: '40px',
        padding: '5px',
        margin: '1px 0px',
    }
}

export default Nav;