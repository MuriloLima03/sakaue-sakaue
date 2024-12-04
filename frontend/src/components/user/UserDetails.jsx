import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import userService from "../../api/userService";

const UserDetails = () => {
  const { token } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleFetch = async () => {
    try {
      const response = await userService.getUserById(userId, token);
      setUserDetails(response.data);
    } catch (error) {
      alert("Erro ao buscar usuário: " + error.message);
    }
  };

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      <input
        type="text"
        placeholder="ID do usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleFetch}>Buscar</button>
      {userDetails && (
        <div>
          <p>Nome: {userDetails.nome}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
