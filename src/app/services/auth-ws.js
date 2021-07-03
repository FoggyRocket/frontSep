
import {_api} from './api' //<<--- export solo una o varias en especifico
//import _api from './api'//<<-- exportar todo eel archivo export default

                        //data = {email:'perro@perro.com',password:'Perro'}
export const loginEndpoint = (data) => _api.post('/auth/login',data);

export const signupEndpoint = (data) => {
    //...
    return _api.post('/auth/signup',data)
}

export const logoutEndpoint = () => _api.post('/auth/logout')