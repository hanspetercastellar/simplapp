import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getToken } from '../helpers/auth.helper'

 const AuthContainer = ({
   component: Component,
    ...rest
})=>{

    return (
        <Route 
            {...rest}
            render={
                (props) => {
                    if (!getToken()) {
                        console.log(props)
                        return <Component {...props} />;
                    } else {
                        return (
                          props.history.goBack()
                        )
                    }
                } 
            }
        />
    )

}

export default AuthContainer