import React, { useState } from 'react';

type  CollapseProps = {
  textColor?: "primary" | "secondary";
  bgColor?: "primary" | "secondary";
  title: string;
  variant?: "filled" | "outlined";
  children: React.ReactNode;
}

const Collapse = ({ title="collapse", bgColor="primary", textColor="primary", variant="outlined", children }: CollapseProps) => {
  const bgColors = {
    primary: "bg-slate-200 hover:bg-slate-300 focus:ring-slate-100 ",
    secondary: "bg-red-700 hover:bg-red-800 focus:ring-red-300 ",
  }
  const textColors = {
    primary: "text-black hover:text-gray-900",
    secondary: "text-red-500 hover:text-red-700",
  }

  const variants = {
    filled: "",
    outlined: "border bg-transparent",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className={`inline-block ${bgColors[bgColor]} ${variants[variant]} rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out  hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={toggleCollapse}
      >
        <h3 className={`text-lg ${textColors[textColor]} cursor-pointer font-semibold`}>{title}</h3>

      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-0' : 'max-h-96'
          }`}
      >
        <div className="p-4">
          <div className={`block rounded-lg ${bgColors[bgColor]}  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:text-neutral-50`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
