import React ,{useState} from "react";
import {Card, Col, Form, FormControl, FormLabel, Row} from "react-bootstrap";



const DatosUbicacion = ({register}) => {


    return(
        <div>
            <Row>
                <Col sm={'12'} md={'6'}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Departamento</Form.Label>
                        <Form.Control as="select"  ref={register}>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={'12'} md={'6'}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control as="select"  ref={register}>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={'6'} sm={'12'}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control
                            name={'direccion'}
                            type={'text'}
                            ref={register}
                        />
                    </Form.Group>
                </Col>
                <Col md={'6'} sm={'12'}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control
                            name={'telefono'}
                            type={'text'}
                            ref={register}
                        />
                    </Form.Group>
                </Col>
            </Row>

        </div>
    )

}

export default DatosUbicacion