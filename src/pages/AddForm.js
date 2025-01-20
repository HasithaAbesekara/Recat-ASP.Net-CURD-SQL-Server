import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { useParams, useNavigate } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";
import { apiService } from "../Api/api";

const AddForm = () => {
  const { id } = useParams(); // Get the id from URL if it exists
  const navigate = useNavigate();
  const isEditMode = !!id;
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchUserData = async () => {
    try {
      console.log("Fetching user with ID:", id); // Debug log
      setLoading(true);
      const response = await apiService.getUserById(id);
      console.log("API Response:", response); // Debug log

      if (response && response.success) {
        const userData = response.data;
        setInput({
          name: userData.name || "",
          email: userData.email || "",
          phone: userData.phone || "",
          password: userData.password || "",
        });
      } else {
        setError(response?.message || "Failed to fetch user data");
      }
    } catch (err) {
      console.error("Fetch Error:", err); // Debug log
      setError("Error loading user data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      console.log("Edit mode active for ID:", id); // Debug log
      fetchUserData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const resetForm = () => {
    setInput({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const userData = {
        name: input.name,
        email: input.email,
        phone: input.phone,
        password: input.password,
      };

      let response;
      if (isEditMode) {
        response = await apiService.updateUser(id, userData);
      } else {
        response = await apiService.addUser(userData);
      }

      if (response.success) {
        setSuccess(
          isEditMode ? "User updated successfully!" : "User added successfully!"
        );
        if (!isEditMode) {
          resetForm();
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          // Navigate back to home page after successful update
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } else {
        setError(
          response.message || `Failed to ${isEditMode ? "update" : "add"} user`
        );
      }
    } catch (err) {
      setError(
        `An error occurred while ${isEditMode ? "updating" : "adding"} the user`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full md:max-w-lg mx-auto mt-8 px-4">
      {/* Header */}
      <div className="mt-10 border py-3 px-5 border-purple-600 rounded-lg bg-slate-200 text-center">
        <h1 className="text-2xl mb-2 text-purple-700">
          {isEditMode ? "Update User" : "Add New User"}
        </h1>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {success}
        </div>
      )}

      {/* Form Container */}
      <div className="mt-10 border py-5 px-6 sm:px-8 border-purple-600 rounded-lg bg-white shadow-md">
        <form action="" onSubmit={handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={input.name}
            placeholder="Name..."
            onChange={handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={input.email}
            placeholder="Email..."
            onChange={handleChange}
          />
          <InputField
            label="Phone Number"
            type="number"
            name="phone"
            value={input.phone}
            placeholder="Phone Number..."
            onChange={handleChange}
          />
          {/* <InputField
            label="Username"
            type="text"
            name="username"
            value={input.password}
            placeholder="Username..."
            onChange={handleChange}
          /> */}
          <PasswordInput
            label="Password"
            name="password"
            value={input.password}
            placeholder="Password..."
            onChange={handleChange}
          />

          {/* Button */}
          <div className="flex justify-center gap-4">
            <Button type="submit" disabled={loading}>
              {loading
                ? isEditMode
                  ? "Updating..."
                  : "Adding..."
                : isEditMode
                ? "Update User"
                : "Add New User"}
            </Button>
            <Button
              type="button"
              className="bg-gray-500 hover:bg-gray-600"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
