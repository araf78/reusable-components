import './App.css';
import Banner from './components/banner/Banner';

function App() {
  return (
    <div className="App">
     <h1 className="text-3xl bg-green-800 font-bold underline">
      Hello world!
    </h1>
      <Banner bgColor='success' textColor='success'>New brand identity has been launched for the <a href="/" className="inline font-medium text-blue-600 underline underline-offset-2 decoration-600 decoration-solid hover:no-underline">Contact Us</a></Banner>
    </div>
  );
}

export default App;
