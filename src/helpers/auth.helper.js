 
 module.exports = {
    // retorma el usuario que esta logeado
    getUser(){
        const userStr = sessionStorage.getItem('user');
        if( userStr ) return JSON.parse(userStr);
        else return null
    },
    //Obtiene el Tenan Actual
    getCurrentTenant(){
        const currentTenant = sessionStorage.getItem('tenantSelected')
        if( currentTenant ) {
            return JSON.parse(currentTenant);
        }else {
            return null;
        }
    },

    // retorna el token del usuario de la session actual
    getToken(){
        return sessionStorage.getItem('token') || null;
    },

    //remueve el token y el susuario de las variables de sessionstorage
    removeUserSession(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    },

    //set el token y la session del usuario logeado
    setUserSession(token, user, tenant){
        sessionStorage.setItem('token',token);
        sessionStorage.setItem('user', JSON.stringify(user))
        sessionStorage.setItem('tenantSelected',JSON.stringify(tenant))
    }
 }