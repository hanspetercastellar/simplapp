import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
//Libreria react-hook-form
import { useForm } from "react-hook-form"
import {Form,Button,InputGroup} from "react-bootstrap";

//silices
import {  loginFetch, selectAuth  } from '../../../redux/feature/auth/auth.slice'

export default function Auth(props){

    const { register, handleSubmit, errors } = useForm();
    const { email, password } = errors;
    const dispatch = useDispatch()
    const usuario = useSelector(selectAuth)
    const onSubmit = async data => {

         await dispatch(loginFetch(data, props.history))
    
    }

    useEffect(()=>{
      console.log(usuario)
    },[usuario])

    
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
