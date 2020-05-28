import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

class navbar extends Component {
	state = {};
	render() {
		return (
			<header>
				<Navbar bg="dark" variant="dark" expand="lg">
					<Navbar.Brand href="#home">Dom Romero</Navbar.Brand>
					<Navbar.Text className="mr-auto">Desde 1996</Navbar.Text>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Link className="nav-link" to="/">
								Inicio
							</Link>
							<Link className="nav-link" to="/menu">
								Menu
							</Link>
							<Link className="nav-link" to="/contact">
								Localização e Contactos
							</Link>
							<Link className="nav-link" to="/order">
								Encomendar Já
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		);
	}
}

export default navbar;
