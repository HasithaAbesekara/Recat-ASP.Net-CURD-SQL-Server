import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <div className="text-center my-4">OR</div>

        <div className="flex justify-center space-x-4">
          <button className="p-2 border rounded-full hover:bg-gray-200 transition">
            <FcGoogle size={24} />
          </button>
          <button className="p-2 border rounded-full text-blue-600 hover:bg-gray-200 transition">
            <FaFacebook size={24} />
          </button>
          <button className="p-2 border rounded-full text-gray-900 hover:bg-gray-200 transition">
            <FaGithub size={24} />
          </button>
        </div>

        <p className="text-center mt-4">
          Already have an account?
          <span className="text-blue-500 cursor-pointer">
            <Link to="/login">Login</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
}
