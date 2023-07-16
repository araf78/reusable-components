// import React from 'react';

// interface InputProps {
//    name: String;
//    label: String;
//    type: String;
//    value: String;
//    placeholder: String;
//    className: String;
//    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Input = ({
//    name,
//    label,
//    type,
//    value,
//    placeholder,
//    className,
//    onChange,
// }: InputProps) => {
//    return (
//       <div className={className}>
//          <label htmlFor={name}> {label}</label>
//          <input type={type}  placeholder={placeholder}value={value} onChange={onchange}/>
//       </div>
//    );
// };



import React from "react";

interface InputProps {
  name: string;
  label?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  label,
  type,
  value,
  placeholder,
  className,
  onChange,
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;

