import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../component/AuthPages/Main";
import Sidebar from "../component/AuthPages/Sidebar";
import Title from "../component/Title";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = useContext(AuthContext);

  const goTo = useNavigate();

  useEffect(() => {
    authContext.loadUser();
    // if (!isAuthenticated) {
    //   goTo("/");
    // }
  }, []);

  return (
    <div className="sm:container flex sm:space-x-4 sm:pl-8 sm:py-8 text-white rounded">
      <Sidebar />
      <div className="flex-1 bg-white bg-opacity-10 p-12 space-y-16">
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
