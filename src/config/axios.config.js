import axios from "axios";

var axiosDef = axios.create();
axiosDef.defaults.headers.common['cache-control'] = 'no-cache';
axiosDef.defaults.headers.post['Content-Type'] = 'no-cache';
axiosDef.defaults.headers.put['Content-Type'] = 'no-cache';
axiosDef.defaults.baseURL = "http://localhost:3002/api"

export const Daxios = axiosDef 

//********Confguracion para las peticiones protegidas********** */

var axiosPrivate = axios.create();
axiosPrivate.defaults.headers.common['cache-control'] = 'no-cache';
axiosPrivate.defaults.headers.post['Content-Type'] = 'no-cache';
axiosPrivate.defaults.headers.put['Content-Type'] = 'no-cache';

export const setJWT = (token) => {
    axiosPrivate.defaults.headers.common['x_access_token'] = 'baerer '+token;
}
export const removeJWT = () => {
    axiosPrivate.defaults.headers.common['x_access_token'] = "";
}

///=====Fin Configuraciones peticiones protegidas=====////