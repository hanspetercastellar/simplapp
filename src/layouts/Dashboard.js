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
import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {NavLink as NavLinkRRD, Link} from "react-router-dom";
import '../assets/admin.css';

//Bootstapp-react components
import {Container} from "react-bootstrap";

//Core components
import AdminNavbar from "../components/NavBars/AdminNavbar.js";

//import AdminFooter from "../components/Footers/AdminFooter.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import routes from "../Routes/webRoute.js";

//External library
import { MotionLayoutProvider } from 'react-motion-layout'

export default class DashboardLayout extends React.Component {

    componentDidUpdate(e) {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.mainContent.scrollTop = 0;
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/") {
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
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    render() {
        return (
            <>
                <Sidebar
                    {...this.props}
                    routes={routes}
                    logo={{
                        innerLink: "/Dashboard",
                        imgSrc: require("../assets/img/logos/logo.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <AdminNavbar
                        {...this.props}
                        brandText={this.getBrandText(this.props.location.pathname)}
                    />
                    <Container className={'pt-md-5 pt-sm-3 pt-xs-5'}>
                            <Switch>
                                {this.getRoutes(routes)}
                                <Redirect from="*" to="/dashboard"/>
                            </Switch>

                    </Container>

                    <Container fluid>
                        {/* <AdminFooter />*/}
                    </Container>
                </div>
            </>
        )
    }

}