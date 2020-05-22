const  { Daxios } = require('../config/axios.config');
const { setUserSession, getToken  } = require("./auth.helper")

module.exports  =  {

           async fetchSingIn(data) {
        
              const res = await Daxios.post("/auth/login",data)
              return res
    }

}