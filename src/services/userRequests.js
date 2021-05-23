import axios from "axios";

export const urlUserService = "http://localhost:8079/usuarios/";

export const getUsers = () => {
  return axios.get(urlUserService + "listar");
};

export const editUser = (id) => {
  return axios.put(urlUserService + "editar/" + id);
};

export const createUser = (body) => {
  return axios.post(urlUserService + "nuevo", body);
};
