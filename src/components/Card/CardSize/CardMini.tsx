import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contract from "../../../containers/Contract/betawave/beatwave.json"
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineSubtitles } from "react-icons/md";
import Love from "../Love/Love";
import ButtonView from "../Button/ButtomView";

const contractABI = contract.abi;
const contractAddress = contract.address;

interface Beat {
  owner: string;
  cid: string;
  title: string;
  price: number;
  isForSale: boolean;
  uploadTimestamp: number;
  numberOfLikes: number;
}

interface ID {
  index: number;
}

const CardMini: React.FC<ID> = ({ index }) => {
  const [beat, setBeat] = useState<Beat | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (index !== null) findBeatId(index);
  }, [index]);

  const findBeatId = async (id: number) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      try {
        const beatData: unknown = await contract.methods.beats(id).call();
        console.log(beat);
        // Sử dụng type assertion để ép kiểu unknown thành Beat
        const typedBeatData = beatData as Beat;
        if (typedBeatData.cid !== "") {
          setBeat(typedBeatData);
          setShow(true);
        } else {
          setShow(false);
        }
      } catch (error) {
        console.error("Failed to fetch contract admin:", error);
      }
    } else {
      console.error("window.ethereum is not available");
    }
  };

  const [like, setLike] = useState(0);

  const inC = () => {
    const inc = like + 1;
    setLike(inc);
  };

  return (
    <>
      {show ? (
        <div style={styles.card}>
          {beat ? (
            <div>
              <div style={styles.title}>
                <MdOutlineSubtitles style={styles.icon} />
                <p>{beat.title}</p>
                <Love count={0} />
              </div>
              <div style={styles.price}>
                <FcMoneyTransfer style={styles.icon} />
                <p style={styles.priceText}>{Number(beat.price)} TBNB</p>
                <ButtonView id={index} />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        "Not Found ID"
      )}
    </>
  );
};

const styles = {
  card: {
    width: "250px",
    height: "110px",
    backgroundColor: "#F19373",
    borderRadius: "20px",
    margin: "10px",
  },
  icon: {
    fontSize: "24px",
    marginRight: "5px",
    color: "#333",
  },
  title: {
    padding: "0px",
    margin: "0px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#333", //
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  price: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontSize: "16px",
    color: "#555",
    marginRight: "10px",
  },
};

export default CardMini;
