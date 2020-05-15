import React, { useEffect } from 'react'
import axios from 'axios'

//Libreria react-hook-form
import { useForm } from "react-hook-form"
import {Form,Button,InputGroup} from "react-bootstrap";

//initializations
import { setUserSession, getToken  } from '../../../helpers/auth.helper'

export default function Auth(props){

    const { register, handleSubmit, errors } = useForm();
    const { email, password } = errors;

    const onSubmit = async data => {
        try{
               axios.post("http://localhost:5000/api/auth/login",data)
                    .then((res) => {
                        res = res.data;
                        if(res.auth){
                            setUserSession(res.token,res.user, res.tenants)
                            props.history.push("/dashboard")
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })

        }catch(error) {
            console.log(error)
        }
      
    }

    useEffect(()=>{
        console.log(props)
        async function loadUser(){
             if(!getToken()) {
                return;
              }

              try{
                
              }catch(error) {

              }
        }
       
    },[])

    
    return (

        <>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail" className={'mb-3'}>
                <InputGroup className={'input-group-alternative'}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                            <i className="fas fa-envelope"></i>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="email"
                        placeholder="Correo"
                        aria-describedby="inputGroupPrepend"
                        name="email"
                        ref={register({
                            required: true
                        })}
                    />
                   
                    {errors.email && "este Campo es requerido"}
                
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
                        type="password"
                        placeholder="Contraseña"
                        aria-describedby="inputGroupPrepend"
                        name="password"
                        ref={register({
                            required: true
                        })}
                    />
                     {errors.email && "este Campo es requerido"}
                </InputGroup>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordar Session" />
            </Form.Group>
            <Button variant="info" type="submit">
                Ingresar
            </Button>
        </Form>
   </>

    )

}
