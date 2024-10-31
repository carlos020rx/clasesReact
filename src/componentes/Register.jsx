import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("salome.mosquera@uao.edu.co");
  const [password, setPassword] = useState("12345");
  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); //Previene recargar todo el sitio

    console.log("Enviando datos: ", email, " ", password);
    try {
      await registerUser(email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Register;
