import React from 'react';
import { Button } from '@material-ui/core';
import Hero from './components/Hero';
import Connect from './components/Connect';
import './App.css';
import BasicTabs from './components/Tabs';


function App() {
  return (
    <div className="centered">
      <Hero />
      <Connect />
      <BasicTabs />

      <Button variant="contained" color="primary">
        Click me!
      </Button>
    </div>
  );
}

export default App;
