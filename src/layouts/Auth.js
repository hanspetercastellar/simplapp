import React from "react";
import {Container, Row, Jumbotron, Col,Card,Form,Button,InputGroup} from "react-bootstrap";
// core components
import AuthNavbar from "../components/NavBars/AuthNavbar";
import AuthFooter from "../components/Footers/AuthFooter";
import '../assets/auth.css'
import separator from '../assets/img/separator.svg'
export default class AuthLayout extends React.Component{

    render() {
        console.log(this.props)
        return(
            <>
                <div className="main-content">
                    <AuthNavbar/>
                    <div className="header bg-gradient-info py-7 py-lg-8 " >
                        <Container>
                                <div  className="header-body text-center mb-7">
                                    <Row className="justify-content-center">
                                        <Col lg="5" md="6">
                                            <h1 className="text-white">Binvenidos!</h1>
                                            <p className="text-lead text-light">
                                                Somos la Mejor Opcion en El Mercado Para El Manejo de Tu Negocio
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                        </Container>
                    </div>
                    <Container className={"mt--8 pb-5 form-login"}>
                        <Row className={'justify-content-center'}>
                            <Col md={'7'} lg={'5'}>
                                <Card bg={'white shadow border-0 card p-3'}>
                                    <Card.Header bg={''} className={'text-center pb-5'}>
                                            Inicia Session
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail" className={'mb-3'}>
                                                <InputGroup className={'input-group-alternative'}>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend">
                                                            <i className="fas fa-envelope"></i>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Correo"
                                                        aria-describedby="inputGroupPrepend"
                                                        name="username"
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <InputGroup className={'input-group-alternative'}>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text id="inputGroupPrepend">
                                                            <i className="fas fa-key"></i>
                                                        </InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Contraseña"
                                                        aria-describedby="inputGroupPrepend"
                                                        name="username"
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        {}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Recordar Session" />
                                            </Form.Group>
                                            <Button variant="info" type="submit">
                                                Ingresar
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <AuthFooter/>
            </>
        )
    }

}

