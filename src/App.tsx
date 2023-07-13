import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse from './components/collapse/Collapse';

function App() {
  return (
    <div className="App">
    <Collapse title="collapse" color="secondary" variant='filled' >
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aut quaerat culpa, veniam facere repudiandae!</p>
      </Collapse>
    </div>
  );
}

export default App;
