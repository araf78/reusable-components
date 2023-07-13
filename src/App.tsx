import './App.css';
import ToggleSwitch from './components/switch';

function App() {
  return (
    <div className="App">
     <h1 className="text-3xl bg-green-800 font-bold underline">
      Hello world!
    </h1>
    <ToggleSwitch color="success"  label="Toggle 1" />
    </div>
  );
}

export default App;
