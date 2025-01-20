import React from "react";

const InputField = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-gray-50 border py-3 px-5 w-full sm:w-80 md:w-96 border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 outline-none"
      />
    </div>
  );
};

export default InputField;
