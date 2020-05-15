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
import TercerosView from "../views/Terceros/TercerosView";



var routes = [
    {
        path: "Dashboard",
        name: "Dashboard",
        icon: "fas fa-home",
        component: Index,
        layout: "/"
    },
    {
        path: "Optica",
        name: "Optica",
        icon: "far fa-eye",
        component: Optica,
        layout: "/"
    },
    {
        path: "Contabilidad",
        name: "Contabilidad",
        icon: "far fa-eye",
        component: Index,
        layout: "/"
    }, {
        path: "Terceros",
        name: "Terceros",
        icon: "far fa-eye",
        component: TercerosView,
        layout: "/"
    },
    {
        path: "/login",
        name: "Auth",
        icon: "ni ni-key-25 text-info",
        component: Auth,
        layout: "/Auth"
    },
    {
        path: "/Home",
        name: "Auth",
        icon: "ni ni-key-25 text-info",
        component: Auth,
        layout: "/Terceros"
    },
];


export default routes;
