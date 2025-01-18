import React, { useState } from "react";

const PasswordInput = ({ label, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          placeholder={placeholder}
          className="bg-gray-50 border py-3 px-5 w-full sm:w-80 md:w-96 border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 outline-none pr-12"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-4 flex items-center text-gray-600"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
