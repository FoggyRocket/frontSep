import { _api } from "./api";

//para crear
export const courseCreateEndpoint = (data) => _api.post('/course',data)
//para buscar por campus
export const courseByCampusEndpoint = (id_campus) =>_api.get(`/course/${id_campus}`)
//traer el detalle dee un curso por id
export const courseByIdEndpoint = (id) =>_api.get(`/course/detailCourse/${id}`)
//para actualizar un curso
export const courseUpdateEndpoint = (id,data) =>_api.patch(`/course/updateCourse/${id}`,data)
//para borrar un curso
export const courseDeleteEndpoint = (id) =>_api.delete(`/course/deleteCourse/${id}`)