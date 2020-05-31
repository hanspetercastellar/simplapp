import React from 'react';
import { Button, Container } from 'react-bootstrap';
import FormNewTercero from '../../components/Forms/Terceros/Form';
import Header from '../../components/Headers/Header';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

//Routes
import routes from '../../Routes/webRoute.js';

//Pages
import Home from './Home.view';

const TercerosView = () => {
	return (
		<>
			{/*      <Header titulo={'Terceros'} vista={'Listado'} labelButton={'Crear Nuevo'} linkBton={'/Terceros/Nuevo'}/>*/}
			<section className='pt-3'>
				<Switch>
					<Route exact path={'/Terceros'} component={Home} />
					<Route path={'/Terceros/Nuevo'} component={FormNewTercero} />
					<Redirect from='*' to='/Terceros/Home' />
				</Switch>
			</section>
		</>
	);
};

export default TercerosView;
