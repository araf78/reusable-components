import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// const accordionItems = [
//   {
//     title: 'Accordion Item 1',
//     content: 'Content for Accordion Item 1',
//   },
//   {
//     title: 'Accordion Item 2',
//     content: 'Content for Accordion Item 2',
//   },
//   {
//     title: 'Accordion Item 3',
//     content: 'Content for Accordion Item 3',
//   },
// ];



type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  accordionItems: AccordionItem[];
  color?: 'primary' | 'success';
};

const Accordion: React.FC<AccordionProps> = ({ accordionItems, color = 'primary' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const colors = {
    primary: "bg-slate-200 hover:bg-slate-200  focus:ring-slate-100 ",
    success: "bg-gray-200 hover:bg-gray-200 focus:ring-gray-300 ",
  }

  return (
    <div className=' w-3/4 mx-auto'>
      {accordionItems.map((item, index) => (
        <div key={index} className='flex flex-col items-center'>
          <div
            className={`cursor-pointer hover:${colors[color]} flex space-x-5 pt-5 px-5 accordion Items-center h-16 w-3/4 ${activeIndex === index ? `${colors[color]}` : ''
              }`}
            onClick={() => toggleAccordion(index)}
          >
            {activeIndex === index ? <FaMinus /> : <FaPlus />}
            <h3 className="font-medium">{item.title}</h3>
          </div>


          
          <div className={`overflow-hidden transition-all ease-in-out duration-700 w-3/4 ${activeIndex === index ? 'max-h-96 ' : 'max-h-0'
            }`}>
            {activeIndex === index && (
              <div className={`${colors[color]}  pb-5 px-5`}>
                <p className="leading-6 font-light pl-9 text-justify">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
