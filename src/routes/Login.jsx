import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("salome.mosquera@uao.edu.co");
  const [password, setPassword] = useState("12345");
  const { loginUser } = useContext(UserContext);
  const navega = useNavigate();
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      console.log("Usuario logueado");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmitLogin}>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
