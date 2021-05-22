import axios from "axios";

const urlUserService = "http://localhost:8100/usuarios/";

export const getUsers = () => {
  axios.get(urlUserService);
};

export const editUser = (id) => {
  axios.put(urlUserService + "/editar/" + id);
};
