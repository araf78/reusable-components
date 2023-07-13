import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface ToggleSwitchProps {
    color: 'primary' | 'secondary' | 'success' | 'danger';
    label: string;
  }

const ToggleSwitch = ({ color, label }: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'blue';
      case 'secondary':
        return 'gray';
      case 'success':
        return 'green';
      case 'danger':
        return 'red';
      default:
        return 'gray';
    }
}

  const toggleStyles = {
    backgroundColor: checked ? getColorClass(color) : 'gray',
    transform: checked ? 'translateX(24px)' : 'translateX(0)',
  };

  const switchStyles = twMerge(
    'w-12 h-6 bg-gray-300 rounded-full shadow-inner',
    checked ? `bg-${getColorClass(color)}-500` : `bg-${getColorClass(color)}-300`
  );


  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={toggleChecked}
        />
        <div className={switchStyles}></div>
        {/* <div
          className={`${
            checked ? 'bg-green-500' : 'bg-gray-400'
          } absolute left-0 top-0 w-6 h-6 rounded-full transition-transform transform ${
            checked ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></div> */}
         <div className="absolute left-0 top-0 w-6 h-6 rounded-full transition-transform" style={toggleStyles}></div>
      </div>
      <div className="ml-3 text-gray-700 font-medium">{label}</div>
    </label>
  );
};

export default ToggleSwitch;
