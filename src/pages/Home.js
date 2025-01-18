import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

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
            <Button>Add New User</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
