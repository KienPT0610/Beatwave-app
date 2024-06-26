import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contract from "../../../containers/Contract/betawave/beatwave.json"
import { FcMoneyTransfer } from "react-icons/fc";
import { MdOutlineSubtitles } from "react-icons/md";
import { FcManager } from "react-icons/fc";
import Controls from "../Controls/Controls";
import Love from "../Love/Love";
import ButtonBuy from "../Button/ButtonBuy";

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

const Card: React.FC<ID> = ({ index }) => {
  const [beat, setBeat] = useState<Beat | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    findBeatId(index);
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

  const uri =
    "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-1.jpg";

  return (
    <>
      {show ? (
        <div style={styles.card}>
          {beat ? (
            <div>
              <div style={styles.avatarContainer}>
                <img
                  src={uri}
                  alt="Avatar"
                  style={styles.avatar as React.CSSProperties}
                />
              </div>
              {/* <p>
                <strong>CID:</strong> {beat.cid}
              </p> */}
              <div style={styles.title}>
                <MdOutlineSubtitles style={styles.icon} />
                <p>{beat.title}</p>
              </div>
              <p>
                <FcManager /> {beat.owner}
              </p>
              <div style={styles.container}>
                <Controls
                  src={
                    "https://ipfs.io/ipfs/QmWSfYwr4ZoXz6s6ncCj5GA58A3aNS8DtaMJSch1VEPwG8"
                  }
                />
                <Love count={0} />
              </div>
              <div style={styles.price}>
                <FcMoneyTransfer style={styles.icon} />
                <p style={styles.priceText}>{Number(beat.price)} TBNB</p>
                <ButtonBuy />
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
    width: "800px",
    height: "500px",
    backgroundColor: "#F19373",
    borderRadius: "20px",
    margin: "10px",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "10px 0",
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    paddingTop: "10px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "0px",
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

export default Card;
