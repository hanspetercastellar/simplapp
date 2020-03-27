/*!

=========================================================
* Simplapp Software - v0.1
=========================================================

* Product Page: ####
* Copyright 2020
* Coded by Ing Hans Peter Castellar

=========================================================
*
*/
import Index from "../views/index.js";
import Auth from "../layouts/Auth.js";
import Optica from  '../views/Optica/index.js'

var routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "fas fa-home",
        component: Index,
        layout: "/Admin"
    },
    {
        path: "/Optica",
        name: "Optica",
        icon: "far fa-eye",
        component: Optica,
        layout: "/Admin"
    },
    {
        path: "/Contabilidad",
        name: "Contabilidad",
        icon: "far fa-eye",
        component: Index,
        layout: "/Admin"
    }, {
        path: "/Clientes",
        name: "Clinetes",
        icon: "far fa-eye",
        component: Index,
        layout: "/Admin"
    },
    {
        path: "/login",
        name: "Auth",
        icon: "ni ni-key-25 text-info",
        component: Auth,
        layout: "/Auth"
    },
];
export default routes;
