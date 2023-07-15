import React, { ReactNode, useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

type BannerProps = {
  children: ReactNode;
  color?: 'success' | 'warning' | 'error';
};

const Banner: React.FC<BannerProps> = ({ children, color = 'success' }) => {
  const [isClosed, setIsClosed] = useState(false);

  let bgColor = 'bg-gray-50';
  let borderColor = 'border-gray-200';
  let textColor = 'text-gray-400';

  switch (color) {
    case 'success':
      bgColor = 'bg-green-500';
      borderColor = 'border-green-600';
      textColor = 'text-green-600';
      break;
    case 'warning':
      bgColor = 'bg-yellow-500';
      borderColor = 'border-yellow-600';
      textColor = 'text-yellow-600';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      borderColor = 'border-red-600';
      textColor = 'text-red-600';
      break;
    default:
      break;
  }

  const handleClose = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div id="sticky-banner" className={`fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b ${bgColor} ${borderColor}`}>
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
        <button onClick={handleClose} data-dismiss-target="#sticky-banner" type="button" className={`flex-shrink-0 inline-flex justify-center w-7 h-7 items-center ${textColor} rounded-lg text-sm p-1.5`}>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
