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
      <Banner type='success'>New brand identity has been launched for the <a href="https://flowbite.com" className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Contact Us</a></Banner>
    </div>
  );
}

export default App;
