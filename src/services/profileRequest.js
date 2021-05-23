import axios from "axios";

// Pendiente
export const urlProfileService = "http://localhost:8079/pepefu/perfil/";
// export const urlProfileService = "http://localhost:8101/perfil/"

export const getProfiles = () => {
  return axios.get(urlProfileService + "listar");
};

export const createProfile = (body) => {
  return axios.post(urlProfileService + "nuevo", body);
};
