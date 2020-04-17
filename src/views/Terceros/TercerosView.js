import React from "react";
import {Button, Container} from "react-bootstrap";
import FormNewTercero from "../../components/Forms/Terceros/Form";
import Table from "../../components/Tables/TablaEjemplo";
import Header from "../../components/Headers/Header";
import {Route, Switch, Redirect, Link} from "react-router-dom";


//Routes
import routes from "../../Routes/webRoute.js";

//hooks


const TercerosView = () => {



    return(
        <>
      {/*      <Header titulo={'Terceros'} vista={'Listado'} labelButton={'Crear Nuevo'} linkBton={'/Terceros/Nuevo'}/>*/}
            <Switch>
                <Route
                    exact
                    path={'/Terceros/Home'}
                    component={Table}
                />
                <Route
                    exact
                    path={'/Terceros/Nuevo'}
                    component={FormNewTercero}
                />
                <Redirect from="*" to="/Terceros/Home" />
            </Switch>

        </>
    );

}


export default TercerosView