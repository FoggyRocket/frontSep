import { _api } from "./api";



export const campusListEndpoint = () => _api.get('/campus') ;

export const campusCreateEndpoint = (data) => {
    return _api.post('/campus/createCampus',data)
}