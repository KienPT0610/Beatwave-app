import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import Web3 from "web3";
import contract from "../../../containers/Contract/betawave/beatwave.json";

interface ChildProps {
  id: number;
  owner: string;
}

const contractAd = contract.address;
const contractABI = contract.abi;

const ButtonTransfer: React.FC<ChildProps> = ({ id, owner }) => {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  const handleSubmit = (event: {
    target: HTMLFormElement | undefined;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newOwner = data.get("newOwner");
    console.log(newOwner);
    //xử lí transfer
    if (newOwner !== "") {
      transferOwner(newOwner);
    }
    handleCloseModal();
  };

  const transferOwner = async (newOwner: FormDataEntryValue | null) => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const contract = await new web3.eth.Contract(contractABI, contractAd);
      await contract.methods
        .transferOwner(id, newOwner)
        .send({ from: accounts[0] });
      alert("Transfer Owner Success!");
      window.location.reload();
    } catch (error) {
      console.error("Error transferring ownership:", error);
      alert("Failed to transfer ownership. See console for details.");
    }
  };

  return (
    <div>
      <div style={styles.button as React.CSSProperties} onClick={handleOpenModal}>
        Transfer Owner
      </div>
      <Modal
        show={show}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        id={id}
        owner={owner}
      />
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: "#FF6A6A",
    width: "auto",
    height: "25px",
    cursor: "pointer",
    textAlign: 'center',
    margin: '20px',
    borderRadius: '20px',
  },
};

export default ButtonTransfer;
