import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { apiService } from "../Api/api";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await apiService.getAllUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await apiService.deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        setError("Failed to delete user");
      }
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error)
    return <div className="text-red-600 text-center mt-8">{error}</div>;

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className=" flex items-center justify-center gap-1 mb-5">
        <h1 className="text-4xl font-bold text-purple-800 underline">
          Recat AND ASP.Net Core CURD
        </h1>
      </div>
      <div className=" overflow-x-auto py-10 px-10">
        <div className=" mb-2 w-full text-right">
          <Link to="/create">
            <Button>Add New User</Button>
          </Link>
        </div>
        <div className="overflow-x-auto ">
          <table className="w-full  table-fixed border-collapse border border-gray-300 ">
            <thead>
              <tr className="bg-purple-300">
                <th className="border border-purple-500 px-4 py-2 text-purple-800 ">
                  Name
                </th>
                <th className="border border-purple-500 px-4 py-2 text-purple-800">
                  Email
                </th>
                <th className="border border-purple-500 px-4 py-2 text-purple-800">
                  Phone
                </th>
                <th className="border border-purple-500 px-4 py-2 text-purple-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border border-purple-500 px-4 py-2 text-gray-800">
                    {user.name}
                  </td>
                  <td className="border border-purple-500 px-4 py-2 text-gray-800">
                    {user.email}
                  </td>
                  <td className="border border-purple-500 px-4 py-2 text-gray-800">
                    {user.phone}
                  </td>
                  <td className="border border-purple-500 px-4 py-2 space-x-2">
                    <Button
                      onClick={() => navigate(`/edit/${user.id}`)}
                      className="bg-purple-400 hover:bg-purple-700"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-400 hover:bg-red-700"
                    >
                      Delete
                    </Button>
                    {/* <button
                      type={type}
                      onClick={onClick}
                      className={`text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className}`}
                    >
                      Delete
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Controls */}
        {users.length > usersPerPage && (
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-purple-300 rounded ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-400"
              }`}
            >
              Previous
            </button>
            <span className="text-lg font-semibold text-purple-800">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-purple-300 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-400"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
