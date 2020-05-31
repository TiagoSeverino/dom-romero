import React, { Component } from 'react';
import { Navbar, Nav, Modal, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

class navbar extends Component {
	state = {};
	render() {
		const { modal } = this.state;
		return (
			<>
				<header>
					<Navbar bg="dark" variant="dark" expand="lg">
						<Navbar.Brand href="/">Dom Romero</Navbar.Brand>
						<Navbar.Text className="mr-auto">
							Desde 1996
						</Navbar.Text>
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
								<a
									className="nav-link"
									onClick={() =>
										this.setState({ modal: true })
									}
								>
									Encomendar Já
								</a>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</header>
				<Modal
					size="lg"
					show={modal}
					onHide={() => this.setState({ modal: false })}
					aria-labelledby="encomendar-ja"
				>
					<Modal.Header closeButton>
						<Modal.Title
							id="encomendar-ja"
							style={{ textAlign: 'center', width: '100%' }}
						>
							Encomende já!
						</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ display: 'flex' }}>
						<Col xs={6}>
							<a className="text-muted" href="tel:+351919732850">
								<Button
									variant="dark"
									style={{
										width: `100%`,
										backgroundColor: '#000',
										borderColor: '#000',
									}}
								>
									Telemovel
								</Button>
							</a>
						</Col>
						<Col xs={6}>
							<a className="text-muted" href="tel:+351261324196">
								<Button
									variant="dark"
									style={{
										width: `100%`,
										backgroundColor: '#000',
										borderColor: '#000',
									}}
								>
									Telefone
								</Button>
							</a>
						</Col>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default navbar;
