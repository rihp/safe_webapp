import React from 'react';
import { Button } from '@material-ui/core';
import Hero from './components/Hero';
import Endpoint from './components/Endpoint';
import Connect from './components/Connect';

function App() {
  return (
    <div>


      <Hero />
      <Connect />
      <Endpoint />
      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
}

export default App;
