import { _api } from "./api";

//para crear
export const projectCreateEndpoint = (data) => _api.post('/project/create',data)
//poyectos por curso
export const projectByCourseEndpoint = (id_course) =>_api.get(`/project/${id_course}`)
//para actualizar un curso
export const projectUpdateEndpoint = (id,data) =>_api.patch(`/project/updateProject/${id}`,data)
//traer miss proyectos
export const projectMineEndpoint = () =>_api.get(`/project/myProjects`)
