import React, { useState } from "react";
import userService from "../../api/userService";

const Register = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    dataNascimento: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.register(formData);
      alert("Usuário registrado com sucesso!");
    } catch (error) {
      alert("Erro ao registrar usuário: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registrar</h1>
      {Object.keys(formData).map((field) => (
        <div key={field}>
          <input
            type={
              field === "email"
                ? "email"
                : field === "senha"
                ? "password"
                : field === "dataNascimento"
                ? "date"
                : "text"
            }
            placeholder={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
