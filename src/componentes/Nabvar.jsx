import { UserContext } from "../context/UserProvider";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
//React from "react";

const Nabvar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const handleClicklogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.log("Error al cerrar sesión: ", error.code);
    }
  };
  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Inicio</NavLink>
          <button onClick={handleClicklogOut}> |Logout| </button>
        </>
      ) : (
        <>
          <NavLink to="/login">|Login|</NavLink>
          <NavLink to="/register">|Register|</NavLink>
        </>
      )}
    </div>
  );
};

export default Nabvar;
