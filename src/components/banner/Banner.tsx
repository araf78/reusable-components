import React, { ReactNode, useState } from 'react';
import { HiOutlineLightBulb } from 'react-icons/hi';

type BannerProps = {
  children: ReactNode;
  type?: 'success' | 'warning' | 'error';
};

const Banner: React.FC<BannerProps> = ({ children, type = 'success' }) => {
  const [isClosed, setIsClosed] = useState(false);

  let bgColor = 'bg-gray-50';
  let borderColor = 'border-gray-200';
  let textColor = 'text-gray-400';

  if (type === 'warning') {
    bgColor = 'bg-yellow-500';
    borderColor = 'border-yellow-600';
  } else if (type === 'error') {
    bgColor = 'bg-red-500';
    borderColor = 'border-red-600';
  }

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    !isClosed ? (<div id="sticky-banner" className={`fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b ${bgColor} ${borderColor} `}>
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 ">
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
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
    </div>

    ) : null
  );
};

export default Banner;
