import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CardMini from '../Card/CardSize/CardMini';
import ReadInforContract from '../../containers/Contract/ContractData/ReadContract/ReadInforContract';
import ReadContract from '../../containers/Contract/ContractData/ReadContract/ReadInforContract';

const Home: React.FC = () => {
  const [cards, setCards] = useState<any[]>([]); 

  const handleUpload = (newCard: any) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <ReadContract/>
      <CardMini index={1} />
    </div>
  );
};

export default Home;
