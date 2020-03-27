import React from "react";

import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import {
    Button,
    Col,
    Collapse,
    Container,
    Form,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
    NavbarBrand,
    Row, ToastHeader
} from "react-bootstrap";


// boostrap react components

class Sidebar extends React.Component {
    state = {
        collapseOpen: false
    };
    constructor(props) {
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }
    // closes the collapse
    closeCollapse = () => {
        this.setState({
            collapseOpen: false
        });
    };
    // toggles collapse between opened and closed (true/false)
    toggleCollapse = () => {
        this.setState({
            collapseOpen: !this.state.collapseOpen
        });
    };
    // creates the links that appear in the left menu / Sidebar
    createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <Nav.Item key={key}>
                    <Link
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        active
                        className={this.activeRoute(prop.layout + prop.path)}
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </Link>
                </Nav.Item>
            );
        });
    };
    render() {
        const { bgColor, routes, logo } = this.props;
        let navbarBrandProps;
        if (logo && logo.innerLink) {
            navbarBrandProps = {
                to: logo.innerLink,
                tag: Link
            };
        } else if (logo && logo.outterLink) {
            navbarBrandProps = {
                href: logo.outterLink,
                target: "_blank"
            };
        }
        return(
            <>
                <Navbar bg={'white'} expand={'md'} className="" id={'sidenav-main'} bg={'white'} className={'navbar-vertical fixed-left'}>
                    <Container fluid>
                        {/* Toggler */}
                        <Navbar.Toggle
                            type="button"
                            onClick={this.toggleCollapse}
                        >
                            <span className="navbar-toggler-icon" />
                        </Navbar.Toggle>
                        {/* Brand */}
                        {logo ? (
                            <Navbar.Brand className="pt-0" {...navbarBrandProps}>
                                <img
                                    alt={logo.imgAlt}
                                    className="navbar-brand-img"
                                    src={logo.imgSrc}
                                    style={{width: '53px'}}
                                />
                            </Navbar.Brand>
                        ) : null}
                        {/* User */}
                        <Nav className="align-items-center d-md-none">
                          HAns peter
                        </Nav>
                        {/* Collapse */}
                        <Navbar.Collapse   isOpen={this.state.collapseOpen} className={'menu-main'}>
                            <div className="navbar-collapse-header d-md-none">
                                <Row>
                                    {logo ? (
                                        <Col className="collapse-brand" xs="6">
                                            {logo.innerLink ? (
                                                <Link to={logo.innerLink}>
                                                    <img alt={logo.imgAlt} src={logo.imgSrc} style={{width:'90px'}}  />
                                                </Link>
                                            ) : (
                                                <a href={logo.outterLink}>
                                                    <img alt={logo.imgAlt} src={logo.imgSrc}   style={{width:'90px'}}  />
                                                </a>
                                            )}
                                        </Col>
                                    ) : null}
                                    <Col xs={'6'} className={'collapse-close'} >
                                        <Navbar.Toggle
                                            type="button"
                                            onClick={this.toggleCollapse}
                                        >

                                        </Navbar.Toggle>
                                        <ToastHeader>

                                        </ToastHeader>
                                    </Col>
                                </Row>
                            </div>
                            {/* Form */}
                            <Nav style={{flexDirection: 'column'}}>{this.createLinks(routes)}</Nav>
                        </Navbar.Collapse>
                        <small style={{color:'#8898aa'}}>Desarrollado por Hcastellar © 2020 </small>
                    </Container>

                </Navbar>
            </>
        );
    }



}

export default Sidebar