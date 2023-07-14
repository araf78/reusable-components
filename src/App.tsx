import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse from './components/collapse/Collapse';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
    <Collapse title="collapse" bgColor="primary"  variant='filled' >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut quaerat culpa, veniam facere repudiandae!</p>
      </Collapse>

      <Banner></Banner>
    </div>
  );
}

export default App;
