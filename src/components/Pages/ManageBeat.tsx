import React, { useState } from 'react';
import { ListMyBeat } from '../../containers/Contract/ContractData/ReadContract/ListMyBeat';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Beat Of Me</h1>
      <ListMyBeat />
    </div>
  );
};

const styles = {
  container: {
    borderTop: '1px solid #D7D7D7',
    borderBottom: '1px solid #D7D7D7',
    backgroundColor: '#FCD9C4',
    height: '1000px',
  }
}

export default Home;
