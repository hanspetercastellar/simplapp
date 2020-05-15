import React, {useEffect, useState} from "react";
import Header from "../../Headers/Header";
import {Button, Card, Col, Container, Form, FormControl, FormLabel, Row} from "react-bootstrap";
import './Form.css'

//Libreria react-hook-form
import {useForm} from "react-hook-form"


const tipoTerceroCheck = [
    {
        label:'Proveedor',
        isChecked:false,
        tipo:1
    },
    {
        label:'Cliente',
        isChecked:true,
        tipo:2
    },
    {
        label:'Distribuidor',
        isChecked:false,
        tipo:3
    },
    {
        label:'Otro',
        isChecked:false,
        tipo:4
    }
]

const style = {}

const FormNewTercero = () =>{
    const { register,handleSubmit, errors,setValue} = useForm({
        defaultValues:{
            departamento:'departamento2'
        }
    });
    const [tipoTercero,setTipoTercero] = useState(0);
    const handleChangeType = function (e) {
        document.querySelectorAll('input[name=tipoTercero]').forEach(function (el) {
            console.log(el.che)
        })
        setTipoTercero(e.target.value)
    }

    const onSubmit = dataForm => {
        setValue('nombre',true)
        console.log(dataForm)
    }

    return(
        <>
          {/*  <Header classes={'mt-md-3 mb-md-3 header-interno  rounded-sm'} CallbackButton={onSubmit}>
                <Container fluid={'fluit'} className={'d-flex justify-content-between  '}>
                    <div className={'d-flex flex-column '}>
                        <small>Terceros</small>
                        <h4 style={{'color':''}}>Registrar Nuevo Tercero</h4>
                    </div>
                    <Button>
                        Guardar
                    </Button>
                </Container>
            </Header>*/}
            <form className={'form-tercero'} onSubmit={handleSubmit(onSubmit)} >
                <Row className={'mt-sm-3'}>
                        <Col xs={'12'} lg={'6'}>
                            <Card>
                                <Card.Header>
                                    Datos Basicos
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <FormLabel>Tipo de Tercero</FormLabel>
                                        <Row>
                                            {tipoTerceroCheck.map((tipo,i)=>(
                                                <Col key={i}>
                                                    <div  className="mb-3">
                                                        <Form.Check id={`check-api-checkbox_${tipo.tipo}`}>
                                                            <Form.Check.Input
                                                                className={'tipoTercero'}
                                                                defaultChecked ={tipo.isChecked}
                                                                type={'checkbox'}
                                                                name={'tercero_'+tipo.tipo}
                                                                ref={register}
                                                            />
                                                            <Form.Check.Label>{tipo.label}</Form.Check.Label>

                                                        </Form.Check>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <hr/>
                                        <div className={' d-flex justify-content-start'}>
                                            {[{label:'Es Persona',type:0,isChecked:true},{label:'Es Empresa',type:1,isChecked:false}].map((tipo,i)=>(
                                                <div key={i} className="mb-3 mr-3">
                                                    <Form.Check ref={register} type={'radio'} id={`check-api-radio${i}`}>
                                                        <Form.Check.Input
                                                            ref={register}
                                                            value={tipo.type}
                                                            type={'radio'}
                                                            name={'tipoTercero'}
                                                            onChange={handleChangeType}
                                                            defaultChecked={tipo.isChecked}
                                                        />
                                                        <Form.Check.Label>{tipo.label}</Form.Check.Label>
                                                    </Form.Check>
                                                </div>
                                            ))}
                                        </div>
                                        {(tipoTercero==0)?
                                            <Row>

                                                <Col sm={'12'} md={'6'}>
                                                    <Form.Group>
                                                        <FormLabel>Nombre</FormLabel><small> (Requerido)</small>
                                                        <FormControl
                                                            ref={register({required:true, maxlength: 50})}
                                                            name={'nombre'}></FormControl>
                                                       <span className={'error'}>{errors.nombre && "El Nombre es Requerido"}</span>
                                                    </Form.Group>

                                                </Col>
                                                <Col sm={'12'} md={'6'}>
                                                    <Form.Group>
                                                        <FormLabel>Apellidos</FormLabel>
                                                        <FormControl ref={register} name={'apellidos'}></FormControl>
                                                        <span className={'error'}>{errors.nombre && "Los Apellidos son Requeridos"}</span>
                                                    </Form.Group>
                                                </Col>

                                            </Row>
                                            :
                                            <Row>

                                                <Col sm={'12'} md={'12'}>
                                                    <Form.Group>
                                                        <FormLabel>Razon Social</FormLabel>
                                                        <FormControl ref={register} name={'razon_social'}></FormControl>
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                        }
                                        <Row>
                                            <Col sm={'12'} md={'6'}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Tipo de Identificacion</Form.Label>
                                                    <Form.Control ref={register} as="select" name={'tipo_id'} >
                                                        <option>NIT</option>
                                                        <option>Cedula de Ciudadania</option>
                                                        <option>Pasaporte</option>
                                                        <option>Cedula de Extrangeria</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col sm={'12'} md={'6'}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Numero</Form.Label>
                                                    <Form.Control
                                                        name={'numero_id'}
                                                        type={'text'}
                                                        ref={register}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={'12'} sm={'12'}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Nombre Comercial</Form.Label>
                                                    <Form.Control
                                                        name={'nombre_comercial'}
                                                        type={'text'}
                                                        ref={register}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={'12'} lg={'6'}>
                            <Card>
                                <Card.Header>
                                    Datos De Ubicacion
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <Row>
                                            <Col sm={'12'} md={'6'}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Departamento</Form.Label>
                                                    <Form.Control as="select"  ref={register} name={'departamento'} >
                                                        <option>departamento1</option>
                                                        <option>departamento2</option>
                                                        <option>departamento3</option>
                                                        <option>departamento4</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col sm={'12'} md={'6'}>
                                                <Form.Group controlId="exampleForm.SelectCustom">
                                                    <Form.Label>Ciudad</Form.Label>
                                                    <Form.Control as="select"  ref={register} name={'ciudad'}>
                                                        <option>ciudad1</option>
                                                        <option>ciudad2</option>
                                                        <option>ciudad3</option>
                                                        <option>ciudad4</option>
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
                                        <Row>
                                            <Col md={'6'} sm={'12'}>
                                                <Button type={"submit"}>
                                                    Guardar
                                                </Button >
                                            </Col>
                                            <Col md={'6'} sm={'12'}>
                                                <Button  type={"reset"}>
                                                    Cancelar
                                                </Button >
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                </Row>
            </form>
        </>
    )

}

export default FormNewTercero