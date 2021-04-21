import React from "react";

interface InputProps {
 type?: "text";
 placeholder?: string;
 onChange: (value: string) => void;
 value?: string;
}

const Input = ({ type = "text", value, onChange, placeholder }: InputProps) => {
 return (
  <input
   className="border-white w-full mt-1 rounded-md"
   type={type}
   placeholder={placeholder}
   value={value}
   onChange={event => onChange(event.target.value)}
  />
 );
};

export default Input;
