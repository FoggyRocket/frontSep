import { _api } from "./api";



//Listar a todos los alumnoss
export const usersListEndpoint = (id) =>_api.get(`/users/students`)
//para actualizar mi ussuario
export const usersUpdateEndpoint = (id,data) =>_api.patch(`/users/editMyUser`,data)
//para borrar un usuario
export const usersDeleteEndpoint = (id) =>_api.delete(`/users/${id}/deleteUser`)