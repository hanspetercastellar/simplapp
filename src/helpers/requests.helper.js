/**
 *  @version 1.0.0
 *  @author Simplapp - Hans Castellar
 *  @description Cliente HTTP para todas las peticiones Web basada en superagent: GET, POST, DELETE, PUT
 *  @param {String} url: "/EndPoint"
 *  @param {Object} data: Payload
 */

import { Paxios } from '../config/axios.config';

// Api global requests

class Request {
	get(url, params) {
		const response = Paxios(url, { params })
			.then(res => {
				console.log(res.data, 'requests.helpers.js:17');
				return { result: res.data, statusCode: res.request.status };
			})
			.catch(error => {
				const { status } = error;
				console.log(error.message, 'request.helper');
				if (status >= 400) {
					return { message: error.message, statusCode: status };
				}
				return { message: error.message, statusCode: 503, error };
			});
		return response;
	}

	post(url, data) {
		const response = Paxios.post(url, data)
			.then(res => {
				return { result: res.data, statusCode: res.request.status };
			})
			.catch(error => {
				return { message: error.message, statusCode: 503, error };
			});
		return response;
	}
}

export default Request;
