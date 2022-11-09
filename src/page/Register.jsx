import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import Alert from "../component/Alert";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = useContext(AlertContext);
  const { alerts, setAlert } = alertContext;

  const goTo = useNavigate();

  const model = {
    name: "",
    email: "",
    company: "",
    password: "",
  };

  const [user, setUser] = useState(model);

  useEffect(() => {
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    } else if (error === "Password should be more than 6") {
      setAlert(error, "danger");
      clearErrors();
    }

    if (isAuthenticated) {
      setUser(model);
      goTo("/dashboard");
    }
  }, [error, isAuthenticated]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(user);
  };

  console.log(user);

  return (
    <div className="container bg-black text-white py-8">
      <div className="sm:px-[500px] space-y-4 relative">
        <Title title="Register" />
        <Alert />
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <label htmlFor="name">Name</label>
          <input
            value={user.name}
            className="bg-transparent text-white w-full h-12 outline-none rounded bg-white bg-opacity-10 px-4"
            name="name"
            type="text"
            placeholder="name"
            required
            onChange={onChange}
          />
          <label htmlFor="company">Company</label>
          <input
            value={user.company}
            className="bg-transparent text-white w-full h-12 outline-none rounded bg-white bg-opacity-10 px-4"
            name="company"
            type="text"
            placeholder="company"
            required
            onChange={onChange}
          />
          <label htmlFor="email">Email</label>
          <input
            value={user.email}
            className="bg-transparent text-white w-full h-12 outline-none rounded bg-white bg-opacity-10 px-4"
            name="email"
            type="text"
            placeholder="email"
            required
            onChange={onChange}
          />
          <label className="rounded" htmlFor="password">
            Password
          </label>
          <input
            value={user.password}
            className="bg-transparent text-white w-full h-12 outline-none rounded bg-white bg-opacity-10 px-4"
            name="password"
            type="password"
            placeholder="password"
            required
            onChange={onChange}
          />
          <motion.button whileTap={{ scale: 0.8 }}>Submit</motion.button>
        </form>
      </div>
    </div>
  );
};

export default Register;
