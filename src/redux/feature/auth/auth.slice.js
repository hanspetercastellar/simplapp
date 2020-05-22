import { createSlice } from '@reduxjs/toolkit';

import { fetchSingIn } from '../../../helpers/api.helper'
const { setUserSession, getToken  } = require("../../../helpers/auth.helper");



const authSlice = createSlice({
    name: "auth",

    initialState: {
        authDetails: {
            isLoged:false,
            user:{},
            tenant:{},
            error:false
        }
       
    },

    reducers: { 
        loginSuccess: (state, action) => {
            const { user, tenants, auth } = action.payload
            state.authDetails = {
                ...state.authDetails,
                isLoged: auth,
                user: user,
                tenant:tenants
            }
        },
        login: (state) => {
            state.authDetails = {
                ...state.authDetails,
                isLoged: false,
                user:{},
                tenant:{}
            }
        },
        logout: (state) => {
            state.authDetails = {
                ...state.authDetails,
                isLoged: false,
                user:{},
                tenant:{}
            }
        } ,

    }
})

export const {actions, reducer} = authSlice
 
export const { logout, loginSuccess, login } = actions;    

export const loginFetch = (data, history) => dispatch => {

      dispatch(login());
      fetchSingIn(data).then((res) => {
        res = res.data;
        if(res.auth){
            setUserSession(res.token,res.user, res.tenants)
            dispatch(loginSuccess(res))
            console.log(res)
            history.push("/Dashboar")
        }
    })
    .catch((error) => {
        console.log(error, "error");
        Promise.reject(error)
    });
      
  };
  

  export const selectAuth = state => state.auth.authDetails;

  export default reducer