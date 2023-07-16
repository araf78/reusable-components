import './App.css';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1 Content for Accordion Item 1 Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1Content for Accordion Item 1',
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2',
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3',
    },
  ];
  return (
    <div className="App">
     <h1 className="text-3xl bg-green-800 font-bold underline">
      Hello world!
    </h1>
    <Accordion accordionItems={accordionItems} color='success' />
    </div>
  );
}

export default App;
