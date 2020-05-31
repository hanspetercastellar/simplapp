import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Progress from '../../common/progressBar/Progress';
//Libreria react-hook-form
import { useForm } from 'react-hook-form';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';

//Componentes externos
import AlertDismissible from '../../common/alerts.component';
import Spinner from '../../common/progressBar/Spinner';

//silices
import {
	loginFetch,
	fetching,
	userAuth,
} from '../../../redux/feature/auth/auth.slice';

export default function Auth(props) {
	const { register, handleSubmit, errors, setError } = useForm();
	const { email, password } = errors;

	const dispatch = useDispatch();
	const isFetching = useSelector(fetching);
	const userStatus = useSelector(userAuth);
	//States
	const [auth, setAuth] = useState({});
	const onSubmit = async data => {
		await dispatch(loginFetch(data, props.history));
	};

	return (
		<>
			<Progress isAnimating={isFetching} />
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='formBasicEmail' className={'mb-3'}>
					<InputGroup className={'input-group-alternative'}>
						<InputGroup.Prepend>
							<InputGroup.Text id='inputGroupPrepend'>
								<i className='fas fa-envelope'></i>
							</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							type='email'
							placeholder='Correo'
							aria-describedby='inputGroupPrepend'
							name='email'
							ref={register({
								required: true,
							})}
						/>
						{console.log(userStatus)}

						{console.log(errors.email)}
					</InputGroup>
					<Form.Text className='text-danger float-right'>
						{errors.email && 'Falta el correo'}
						{userStatus.info.message &&
							userStatus.info.tipo == 'email' &&
							'Correo incorrecto'}
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<InputGroup className={'input-group-alternative'}>
						<InputGroup.Prepend>
							<InputGroup.Text id='inputGroupPrepend'>
								<i className='fas fa-key'></i>
							</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control
							type='password'
							placeholder='Contraseña'
							aria-describedby='inputGroupPrepend'
							name='password'
							ref={register({
								required: true,
							})}
						/>
					</InputGroup>
					<Form.Text className='text-danger float-right'>
						{errors.password && 'Falta la contraseña'}
						{userStatus.info.message &&
							userStatus.info.tipo == 'pass' &&
							'La contraseña es incorrecta'}
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Recordar Session' />
				</Form.Group>
				<Button variant='info' type='submit' disabled={isFetching}>
					Ingresar
					{isFetching && <Spinner></Spinner>}
				</Button>
			</Form>
		</>
	);
}
