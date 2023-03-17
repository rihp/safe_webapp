import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import Web3 from 'web3';

function Connect() {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  const initWeb3 = async () => {
    if (typeof (window as any).ethereum !== 'undefined') {
      const provider = (window as any).ethereum;
      try {
        await provider.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(provider);
        setWeb3(web3Instance);
      } catch (error) {
        console.error('User denied account access');
      }
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={initWeb3}>
        Connect your wallet!
      </Button>
    </div>
  );
}

export default Connect;
