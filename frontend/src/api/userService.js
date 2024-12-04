import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Ajuste o URL se necessário

const userService = {
  register: (data) =>
    axios.post(`${API_BASE_URL}/registrar`, data).then((res) => res.data),

  login: (data) =>
    axios.post(`${API_BASE_URL}/login`, data).then((res) => res.data),

  getUserById: (id, token) =>
    axios
      .get(`${API_BASE_URL}/usuario/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data),

  updateUser: (id, data, token) =>
    axios
      .put(`${API_BASE_URL}/usuario/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data),

  deleteUserLogic: (id, token) =>
    axios.delete(`${API_BASE_URL}/usuario${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),

  deleteUserPermanent: (id, token) =>
    axios.delete(`${API_BASE_URL}/usuario${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export default userService;
