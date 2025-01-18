import React from "react";
import InputField from "../components/InputField";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

const AddForm = () => {
  return (
    <div className="max-w-full md:max-w-lg mx-auto mt-8 px-4">
      {/* Header */}
      <div className="mt-10 border py-3 px-5 border-purple-300 rounded-lg bg-slate-300 text-center">
        <h1 className="text-2xl mb-2 text-purple-700">Add New User</h1>
      </div>

      {/* Form Container */}
      <div className="mt-10 border py-5 px-6 sm:px-8 border-purple-300 rounded-lg bg-white shadow-md">
        <form action="">
          <InputField
            label="Name"
            type="text"
            name="name"
            placeholder="Name..."
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Email..."
          />
          <InputField
            label="Username"
            type="text"
            name="username"
            placeholder="Username..."
          />
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Password..."
          />

          {/* Button */}
          <div className="flex justify-center">
            <Button type="submit">Add New User</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
