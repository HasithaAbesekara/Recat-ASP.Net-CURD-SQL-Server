import React from "react";

const Button = ({ type = "button", onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
