var { setJWT, removeJWT } = require('../config/axios.config');

module.exports = {
	//propiedades
	token: '',

	// retorma el usuario que esta logeado
	getUser() {
		const userStr = sessionStorage.getItem('user');
		if (userStr) return JSON.parse(userStr);
		else return null;
	},
	//Obtiene el Tenan Actual
	getCurrentTenant() {
		const currentTenant = sessionStorage.getItem('tenantSelected');
		if (currentTenant) {
			return JSON.parse(currentTenant);
		} else {
			return null;
		}
	},

	// retorna el token del usuario de la session actual
	getToken() {
		return sessionStorage.getItem('token') || null;
	},

	//remueve el token y el susuario de las variables de sessionstorage
	removeUserSession(callback) {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('user');
		sessionStorage.removeItem('tenantSelected');
		removeJWT();

		if (typeof callback == 'function' && typeof callback !== 'undefined') {
			callback();
		} else {
		}
	},

	//set el token y la session del usuario logeado
	setUserSession(token, user, tenant) {
		sessionStorage.setItem('token', token);
		sessionStorage.setItem('user', JSON.stringify(user));
		sessionStorage.setItem('tenantSelected', JSON.stringify(tenant));

		//setea la cabecera x_access_token con el token suministrado por el server
		setJWT(token);
	},
};
