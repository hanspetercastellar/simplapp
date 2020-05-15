import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getToken } from '../helpers/auth.helper'

 const DashboardContainer = ({
   component: Component,
    ...rest
})=>{

    return (
        <Route 
            {...rest}
            render={
                (props) => {
                    if (getToken()) {
                        console.log(props)
                        return <Component {...props} />;
                    } else {
                        return (
                            
                            <Redirect 
                             to={{
                                 pathname: "/auth",
                                 state : {
                                     from: props.location
                                 }
                             }}
                            />
                        )
                    }
                } 
            }
        />
    )

}

export default DashboardContainer