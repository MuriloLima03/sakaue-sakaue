import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import userService from "../../api/userService";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.login({ email, senha });
      login(response.data.token);
      alert("Login realizado com sucesso!");
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
