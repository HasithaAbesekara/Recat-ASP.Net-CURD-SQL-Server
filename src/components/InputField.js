import React from "react";

const InputField = ({ label, type, name, placeholder }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="bg-gray-50 border py-3 px-5 w-full sm:w-80 md:w-96 border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 outline-none"
      />
    </div>
  );
};

export default InputField;
