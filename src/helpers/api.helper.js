import request from './requests.helper';
import getHistory from 'react-router-global-history';
const { removeUserSession } = require('./auth.helper');

//instancias
const http = new request();

class ApiController {

	constructor() {
		this.segResources = "/resources";
	}
	async fetchSingIn(data) {
		const res = await http.post('/auth/login', data);
		return res;
	}
	async getDepartamentos(history) {
		try {
			const res = await http.get(this.segResources+'/departamentos');
			if (res.error && res.statusCode == 503) {
				removeUserSession(() => {
					alert('La Session Ha expirado');
					getHistory().push('/login');
				});
			}
			return res.result;
		} catch (error) {
			alert(error, 'api.helper:16');
		}
	}
	async getMunicipiosXdepto(id) {
		const res = await http.get(this.segResources+'/ciudades/', { id });
		if (res.statusCode == 503) {
			return alert(res.error);
		}
		console.log(res.result.data, 'api.helper');
		return res.result;
	}
	async getPuc(id) {
		const res = await http.get(this.segResources+'/puc',{id})
		if (res.statusCode == 503) {
			return alert(res.error);
		}
		console.log(res.data, 'api.helper');
		return res.result.data;
	}
}

export default ApiController;
