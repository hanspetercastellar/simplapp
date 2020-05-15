/*
import React, {useState,useEffect} from 'react'
import routes from "../Routes";
import {Route} from "react-router-dom";

function useGetRoutes(path) {
    console.log(routes)
    return routes.map((prop, key) => {
        if (prop.layout === path) {
            return (
                <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                />
            );
        } else {
            return null;
        }
    });
}

export default useGetRoutes()
*/
