import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className=" flex items-center justify-center gap-1 mb-5">
        <h1 className="text-4xl font-bold">
          Recat AND ASP.Net Core CURD Recat AND ASP.Net Core CURD
        </h1>
      
      </div>
      <div className=" overflow-x-auto py-10">
        <div className=" mb-2 w-full text-right">
          <Link to="/create">
            <button className=" text-white bg-purple-600 hover:bg-gray-200 hover:text-purple-600 front-medium border border-red-50 py-5 px-3 ">
              Add New User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
