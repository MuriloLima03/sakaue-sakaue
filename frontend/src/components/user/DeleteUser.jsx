import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import userService from "../../api/userService";

const DeleteUser = () => {
  const { token } = useContext(AuthContext); // Pegar o token do contexto de autenticação
  const [userId, setUserId] = useState(""); // Estado para armazenar o ID do usuário
  const [isPermanent, setIsPermanent] = useState(false); // Estado para verificar tipo de exclusão

  const handleDelete = async () => {
    try {
      if (isPermanent) {
        await userService.deleteUserPermanent(userId, token); // Exclusão permanente
        alert("Usuário deletado permanentemente com sucesso!");
      } else {
        await userService.deleteUserLogic(userId, token); // Exclusão lógica
        alert("Usuário deletado logicamente com sucesso!");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.mensagem || "Erro ao deletar usuário.";
      alert(errorMessage); // Exibe o erro retornado pelo back-end
    }
  };

  return (
    <div>
      <h1>Deletar Usuário</h1>
      <input
        type="text"
        placeholder="ID do usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)} // Atualiza o ID do usuário
        required
      />
      <div className="delete-container">
        <label>
          <input
            type="checkbox"
            checked={isPermanent}
            onChange={(e) => setIsPermanent(e.target.checked)} // Atualiza o estado para exclusão permanente
          />
          Clique aqui para deletar permanentemente
        </label>
        <button
          className={`delete-button ${isPermanent ? "delete" : ""}`}
          onClick={handleDelete} // Chama a função para deletar
        >
          {isPermanent ? "Deletar Permanentemente" : "Deletar"}
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
