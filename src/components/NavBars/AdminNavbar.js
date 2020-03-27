import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

class AdminNavbar extends React.Component{

    render() {
        return(
            <>
                <Navbar style={{background:'#f5f5f5'}} className={'position-top navbar-dark navbar navbar-expand-md'} variant="dark">
                    <Container>
                        <Link
                            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                            to="/"
                        >
                            {this.props.brandText}
                        </Link>
                        <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                            <Form.Group>

                            </Form.Group>
                        </Form>
                    </Container>

                </Navbar>
            </>
        )
    }
}

export default AdminNavbar