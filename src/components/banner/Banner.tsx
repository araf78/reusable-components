import React, { ReactNode, useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

type BannerProps = {
  children: ReactNode;
  // type?: 'success' | 'warning' | 'error';
  bgColor?: 'primary' | 'success',
  borderColor?: 'primary' | 'success',
  textColor?: 'primary' | 'success'
};

const Banner: React.FC<BannerProps> = ({ children, textColor='success', bgColor='success', borderColor='success' }) => {
  const [isClosed, setIsClosed] = useState(false);

  const bgColors = {
    primary: 'bg-gray-50 border-gray-200',
    success: 'bg-yellow-500 border-yellow-600',
  }
  const textColors = {
    primary: 'text-gray-400',
    success: 'text-yellow-600',
  }

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div id="sticky-banner" className={`fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b ${bgColors[bgColor]} `}>
      <div className="flex items-center mx-auto">
        <p className={`flex items-center text-sm font-normal ${textColor}`}>
          <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full w-6 h-6 items-center justify-center">
            <HiOutlineLightBulb />
            <span className="sr-only">Light bulb</span>
          </span>
          <span>{children}</span>
        </p>
      </div>
      <div className="flex items-center">
        <button onClick={handleClose} data-dismiss-target="#sticky-banner" type="button" className={`flex-shrink-0 inline-flex justify-center w-7 h-7 items-center ${textColors[textColor]} rounded-lg text-sm p-1.5`}>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
