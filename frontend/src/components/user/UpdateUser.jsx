import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import userService from "../../api/userService";

const UpdateUser = () => {
  const { token } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
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
      const response = await userService.updateUser(userId, formData, token);
      alert("Usuário atualizado com sucesso: " + JSON.stringify(response.data));
    } catch (error) {
      alert("Erro ao atualizar usuário: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Atualizar Usuário</h1>
      <input
        type="text"
        placeholder="ID do usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
        />
      ))}
      <button className="update">Atualizar</button>
    </form>
  );
};

export default UpdateUser;
