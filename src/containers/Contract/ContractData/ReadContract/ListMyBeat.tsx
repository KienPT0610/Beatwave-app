import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contract from "../../betawave/beatwave.json";
import CardOfMe from "../../../../components/Card/CardSize/CardOfMe";

interface Beats {
  owner: string;
  cid: string;
  title: string;
  price: number;
  isForSale: boolean;
  uploadTimestamp: number;
  numberOfLikes: number;
}

const contractABI = contract.abi;
const contractAddr = contract.address;

export function ListMyBeat() {
  const [beatCountId, setBeatCount] = useState<number | null>(null);
  const [accounts, setAccount] = useState<string | null>(null);
  const [beat, setBeat] = useState<Beats[]>([]);

  useEffect(() => {
    ConnectMetaMask();
    fetchTotalBeat();
  }, []);

  const ConnectMetaMask = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const defaultAccount = accounts[0];
    setAccount(defaultAccount);
  };

  const fetchTotalBeat = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(contractABI, contractAddr);
      const total = await contract.methods.beatCountId().call();
      setBeatCount(Number(total));
    } catch (error) {
      console.error(error);
    }
  };

  const findBeatOfAccount = async () => {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(contractABI, contractAddr);
    const newBeats: Beats[] = [];
    for (let index = 1; index <= Number(beatCountId); index++) {
      const beatData: unknown = await contract.methods.beats(index).call();
      const typedBeatData = beatData as Beats;
      if (typedBeatData.cid !== "" && typedBeatData.owner === accounts) {
        newBeats.push(typedBeatData);
      }
    }
    setBeat(newBeats);
  };

  useEffect(() => {
    if (beatCountId !== null && accounts !== null) {
      findBeatOfAccount();
    }
  }, [beatCountId, accounts]);

  return (
    <div>
      <h2>Beats of account {accounts} is: </h2>
      {beat.length > 0 ? (
        <div>
          <h2>Total: {beat.length} beats</h2>
          <ul>
            {beat.map((beatItem, index) => (
              <CardOfMe index={index+1} {...beatItem} />
            ))}
          </ul>
        </div>
      ) : (
        <p>No beats found.</p>
      )}
    </div>
  );
}
