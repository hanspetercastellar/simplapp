/*!

=========================================================
* Simplapp Software - v0.1
=========================================================

* Product Page: ####
* Copyright 2020
* Coded by Ing Hans Peter Castellar
* Description: Continene las rutas internas para la vista de terceros
=========================================================
*
*/
import Index from "../views/index.js";
import Auth from "../layouts/Auth.js";
import Optica from  '../views/Optica/index.js'
import TableEjemplo from "../components/Tables/TablaEjemplo";



var routes = [
    {
        path: "/Home",
        name: "Dashboard",
        icon: "fas fa-home",
        component: TableEjemplo,
        layout: "/Terceros"
    },

];


export default routes;
