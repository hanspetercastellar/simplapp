import { createSlice } from '@reduxjs/toolkit';

import ApiController from '../../../helpers/api.helper';
const { setUserSession, getToken } = require('../../../helpers/auth.helper');

const Api = new ApiController();

const authSlice = createSlice({
	name: 'auth',

	initialState: {
		isFetching: false,
		authDetails: {
			isLoged: false,
			user: {},
			tenant: {},
			error: false,
		},
		authFailure: {
			auth: true,
			info: {},
			user: {},
		},
	},

	reducers: {
		loginSuccess: (state, action) => {
			const { user, tenants, auth } = action.payload;
			state.isFetching = false;
			state.authDetails = {
				...state.authDetails,
				isLoged: auth,
				user: user,
				tenant: tenants,
			};
		},
		loginIsFetching: state => {
			state.isFetching = !state.isFetching;
		},
		loginFail: (state, action) => {
			const { auth, info, user } = action.payload;
			state.isFetching = false;
			state.authFailure = {
				...state.authFailure,
				auth,
				info,
				user,
			};
		},
		logout: state => {
			state.isFetching = false;
			state.authDetails = {
				...state.authDetails,
				isLoged: false,
				user: {},
				tenant: {},
			};
		},
	},
});

export const { actions, reducer } = authSlice;

export const { logout, loginSuccess, loginIsFetching, loginFail } = actions;

export const loginFetch = (data, history) => async dispatch => {
	dispatch(loginIsFetching());

	const response = await Api.fetchSingIn(data);
	if (response.result) {
		const result = response.result;
		if (result.auth) {
			setUserSession(result.token, result.user, result.tenants);
			dispatch(loginSuccess(result));
			console.log(result);
			history.push('/Dashboard');
		} else {
			dispatch(loginIsFetching());
			dispatch(loginFail(result));
		}
	} else if (response.statusCode == 503) {
		alert(response.message + ' error: ' + response.statusCode);
		dispatch(loginIsFetching());
	}
};

export const fetching = state => state.auth.isFetching;
export const userAuth = state => state.auth.authFailure;
export default reducer;
