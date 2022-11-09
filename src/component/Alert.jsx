import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = ({ msg, type }) => {
  const alertContext = useContext(AlertContext);
  const { alerts, setAlert } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div
        key={alert.id}
        className={`${
          alert.type === "danger"
            ? `bg-red-100 text-red-700`
            : `bg-green-100 text-green-700`
        } p-4 rounded fixed`}
      >
        <div>{alert?.msg}</div>
      </div>
    ))
  );
};

export default Alert;
