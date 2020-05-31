import React, { useEffect, useState } from 'react';
//Libreria react-hook-form
import { useForm } from 'react-hook-form';
import Progress from '../../common/progressBar/Progress';
import ApiController from '../../../helpers/api.helper';
import Dv from '../../../helpers/common.helper'; //Devuelve el codigo de verificacion de un nit
import puc from '../../../Vars/puc.json';
import AsyncSelect from 'react-select/async';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	FormControl,
	FormLabel,
	Row,
} from 'react-bootstrap';
import './Form.css';
import { Icon, Tooltip, Whisper } from 'rsuite';

//Instancias
const Api = new ApiController();
//vars
const tipoTerceroCheck = [
	{
		label: 'Proveedor',
		isChecked: false,
		tipo: 1,
	},
	{
		label: 'Cliente',
		isChecked: true,
		tipo: 2,
	},
	{
		label: 'Distribuidor',
		isChecked: false,
		tipo: 3,
	},
	{
		label: 'Otro',
		isChecked: false,
		tipo: 4,
	},
];

const style = {};

const FormNewTercero = () => {
	const { register, handleSubmit, reset, errors, setValue } = useForm({
		defaultValues: {
			departamento: 'Bolivar',
		},
		mode: 'onChange',
	});
	const [tipoTercero, setTipoTercero] = useState(0);
	const [otroSelected, setOtroselected] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [cv, setCv] = useState('');

	const [FormData, setFormData] = useState({
		departamentos: {
			selected: 4,
			data: [],
		},
		ciudades: {
			selected: false,
			data: [],
		},
	});

	const handleChangeType = function (e) {
		document.querySelectorAll('input[name=tipoTercero]').forEach(function (el) {
			console.log(el.che);
		});
		setTipoTercero(e.target.value);
		console.log(tipoTercero);
	};

	const handleChangeTerceroTipo = el => {
		if (
			el.currentTarget.checked == true &&
			el.currentTarget.name == 'tercero_4'
		) {
			setOtroselected(true);
		} else {
			setOtroselected(false);
		}
	};

	let onSubmit = dataForm => {
		console.log(dataForm);
	};

	useEffect(() => {
		getDep();
	}, []);

	async function getDep() {
		let deptos = await Api.getDepartamentos();
		let ciudades = await getCiudadesXdepto(4);
		setFormData(() => ({
			...FormData,
			departamentos: {
				selected: 4,
				data: deptos.departamentos,
			},
			ciudades: {
				selected: false,
				data: ciudades.data,
			},
		}));

		setIsLoading(false);
		console.log(puc);
	}

	async function getCiudadesXdepto(deptoID) {
		let data = await Api.getMunicipiosXdepto(deptoID);
		return data;
	}
	function listDeptos() {
		return FormData.departamentos.data.map((el, i) => {
			return (
				<option
					key={i}
					selected={el.id == FormData.departamentos.selected ? true : false}
					value={el.id}
					label={el.departamento}
				/>
			);
		});
	}
	function lisCiudades() {
		return FormData.ciudades.data.map((el, i) => {
			return <option key={i} value={el} label={el} />;
		});
	}

	const handleChangeDepto = async el => {
		console.log(el.currentTarget.value);
		const data = await getCiudadesXdepto(el.currentTarget.value);
		setFormData(() => ({
			...FormData,
			ciudades: {
				selected: false,
				data: data.data,
			},
		}));
	};

	const handleChangeNumeroDoc = el => {
		if (el.currentTarget.value !== '') {
			let dv = new Dv(el.currentTarget.value);
			setCv(dv.calcular());
		}
	};

	const filterColors = inputValue => {
		return puc.filter(i =>
			i.Codigo.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	const promiseOptions = inputValue =>
		new Promise(resolve => {
			setTimeout(() => {
				resolve(filterColors(inputValue));
			}, 1000);
		});
	const tooltip = (
		<Tooltip>
			This is a help <i>tooltip</i> .
		</Tooltip>
	);
	return (
		<>
			<Progress isAnimating={isLoading} />
			<form className={'form-tercero'} onSubmit={handleSubmit(onSubmit)}>
				<Row className={'mt-sm-3'}>
					<Col xs={'12'} lg={'6'} className='mb-sm-2'>
						<Card>
							<Card.Header>Datos Basicos</Card.Header>
							<Card.Body>
								<div>
									<FormLabel>Tipo de Tercero</FormLabel>
									<Row className='contentCheckbox'>
										{tipoTerceroCheck.map((tipo, i) => (
											<Col key={i}>
												<div className='mb-3'>
													<Form.Check id={`check-api-checkbox_${tipo.tipo}`}>
														<Form.Check.Input
															className={'tipoTercero'}
															defaultChecked={tipo.isChecked}
															type={'checkbox'}
															disabled={
																tipo.label !== 'Otro' ? otroSelected : false
															}
															name={'tercero_' + tipo.tipo}
															ref={register}
															onChange={handleChangeTerceroTipo}
														/>
														<Form.Check.Label>{tipo.label}</Form.Check.Label>
													</Form.Check>
												</div>
											</Col>
										))}
									</Row>
									{otroSelected && (
										<Row>
											<Col>
												<Form.Group>
													<FormLabel>Especifique un Tipo</FormLabel>

													<FormControl name='otroCustom' ref={register} />
												</Form.Group>
											</Col>
										</Row>
									)}

									<hr />
									<div className={' d-flex justify-content-start'}>
										{[
											{ label: 'Es Persona', type: 0, isChecked: true },
											{ label: 'Es Empresa', type: 1, isChecked: false },
										].map((tipo, i) => (
											<div key={i} className='mb-3 mr-3'>
												<Form.Check
													ref={register}
													type={'radio'}
													id={`check-api-radio${i}`}
												>
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
									{tipoTercero == 0 ? (
										<Row>
											<Col sm={'12'} md={'6'}>
												<Form.Group>
													<FormLabel>Nombre</FormLabel>
													<small> (Requerido)</small>
													<FormControl
														ref={register({
															required: true,
															maxlength: 50,
														})}
														name={'nombre'}
													></FormControl>
													<span className={'error'}>
														{errors.nombre && 'El Nombre es Requerido'}
													</span>
												</Form.Group>
											</Col>
											<Col sm={'12'} md={'6'}>
												<Form.Group>
													<FormLabel>Apellidos</FormLabel>
													<FormControl
														ref={register({
															maxLength: 50,
														})}
														name={'apellidos'}
													></FormControl>
													<span className={'error'}>
														{errors.apellidos && 'Los Apellidos son Requeridos'}
													</span>
												</Form.Group>
											</Col>
										</Row>
									) : (
										<Row>
											<Col sm={'12'} md={'12'}>
												<Form.Group>
													<FormLabel>Razon Social</FormLabel>
													<small> (Requerido)</small>
													<FormControl
														ref={register({
															required: true,
															pattern: /^[A-Za-z]+$/i,
															maxLength: 50,
														})}
														name={'razon_social'}
													></FormControl>
													<span className={'error'}>
														{errors.razon_social && 'Este Campo es Requerido'}
													</span>
												</Form.Group>
											</Col>
										</Row>
									)}
									<Row>
										<Col sm={'12'} md={'6'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Tipo de Identificacion</Form.Label>
												<small> (Requerido)</small>
												<Form.Control
													ref={register}
													as='select'
													name={'tipo_id'}
												>
													<option>NIT</option>
													<option selected={tipoTercero == 0 ? true : false}>
														Cedula de Ciudadania
													</option>
													<option>Pasaporte</option>
													<option>Cedula de Extrangeria</option>
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={'12'} md={'6'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Numero</Form.Label>
												<small> (Requerido)</small>
												<Whisper
													placement='top'
													trigger='hover'
													speaker={tooltip}
												>
													<Icon icon='question2' />
												</Whisper>

												<Form.Control
													name={'numero_id'}
													type={'text'}
													onChange={handleChangeNumeroDoc}
													ref={register({ required: true, maxLength: 50 })}
												/>

												<span className={'error'}>
													{errors.numero_id && 'Este Campo es Requerido'}
												</span>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col md={'12'} sm={'12'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Cuenta Contable</Form.Label>
												<AsyncSelect
													cacheOptions
													defaultOptions
													loadOptions={promiseOptions}
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col md={'12'} sm={'12'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Nombre Comercial</Form.Label>
												<Form.Control
													name={'nombre_comercial'}
													type={'text'}
													ref={register({ maxLength: 50 })}
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
							<Card.Header>Datos De Ubicacion</Card.Header>
							<Card.Body>
								<div>
									<Row>
										<Col sm={'12'} md={'6'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Departamento</Form.Label>
												<Form.Control
													as='select'
													ref={register}
													name={'departamento'}
													onChange={handleChangeDepto}
												>
													{listDeptos()}
												</Form.Control>
											</Form.Group>
										</Col>
										<Col sm={'12'} md={'6'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Ciudad</Form.Label>
												<Form.Control
													as='select'
													ref={register}
													name={'ciudad'}
												>
													{lisCiudades()}
												</Form.Control>
											</Form.Group>
										</Col>
									</Row>
									<Row>
										<Col md={'6'} sm={'12'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
												<Form.Label>Direccion</Form.Label>
												<Form.Control
													name={'direccion'}
													type={'text'}
													ref={register}
												/>
											</Form.Group>
										</Col>
										<Col md={'6'} sm={'12'}>
											<Form.Group controlId='exampleForm.SelectCustom'>
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
											<Button className='w-100' type={'submit'}>
												Guardar
											</Button>
										</Col>
										<Col md={'6'} sm={'12'}>
											<Button variant='light' type={'reset'}>
												Cancelar
											</Button>
										</Col>
									</Row>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</form>
		</>
	);
};

export default FormNewTercero;
