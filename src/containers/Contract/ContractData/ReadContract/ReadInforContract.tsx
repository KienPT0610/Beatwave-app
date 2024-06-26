import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  ReactNode,
} from "react";
import Web3 from "web3";
import contract from "../../betawave/beatwave.json";
import InformationBar from "../../../../components/InformationBar/InforBar";

const contractABI = contract.abi;
const contractAddress = contract.address;

const ReadContract: React.FC = () => {
  const [contractAdmin, setContractAdmin] = useState<string | null>(null);
  const [beatCountId, setbeatCountId] = useState<number | null>(null);
  const [contractAddr, setContractAddr] = useState<string | null>(null);

  useEffect(() => {
    fetchContractAdmin();
  }, []);

  const fetchContractAdmin = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const contractInstance = new web3.eth.Contract(
        contractABI,
        contractAddress
      );
      try {
        const admin = await contractInstance.methods.admin().call();
        setContractAdmin(String(admin));
        const beatCountId = await contractInstance.methods.beatCountId().call();
        setbeatCountId(Number(beatCountId));
        setContractAddr(contractAddress);
      } catch (error) {
        console.error("Failed to fetch contract admin:", error);
      }
    } else {
      console.error("window.ethereum is not available");
    }
  };

  return (
    <InformationBar
      beatCountId={beatCountId}
      contractAddr={contractAddr}
      contractAdmin={contractAdmin}
    />
  );
};

export default ReadContract;
