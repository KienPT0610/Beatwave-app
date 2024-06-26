import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contract from '../../betawave/beatwave.json'
import CardBig from "../../../../components/Card/CardSize/CardBig";

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
  return (
    <CardBig index={index} />
  );
};

export default Card;
