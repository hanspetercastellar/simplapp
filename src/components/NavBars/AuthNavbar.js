import React from 'react';
import {
	Navbar,
	Nav,
	NavDropdown,
	FormControl,
	Button,
	Form,
	Container,
} from 'react-bootstrap';

const AuthNavbar = () => {
	return (
		<>
			<Navbar fixed={'top'} className={'NavBarContent'}>
				<Container>
					<Navbar.Brand href='#home' className={'text-white'}>
						Simplapp
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link href='#home' className={'text-white'}>
								Conocenos
							</Nav.Link>
							<Nav.Link href='#link' className={'text-white'}>
								Simpalapp ?
							</Nav.Link>
							{/*    <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
                                      <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                  </NavDropdown>*/}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default AuthNavbar;
