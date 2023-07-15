import './App.css';
import Banner from './components/banner/Banner';
import Collapse from './components/collapse/Collapse';
import ToggleSwitch from './components/switch';

function App() {
  return (
    <div className="App">
     <h1 className="text-3xl bg-green-800 font-bold underline">
      Hello world!
    </h1>
      <Banner type='success'>submit</Banner>
    </div>
  );
}

export default App;
