import React, { Component } from 'react';
import { Row, Col, Image, Jumbotron } from 'react-bootstrap';

class Contact extends Component {
	state = {};
	render() {
		return (
			<>
				<Row className="mb-2">
					<Col xs={12}>
						<Image src="/dom-romero/img/1.png" fluid />
						<h1
							style={{
								...shadow,
								position: 'absolute',
								top: '35%',
								textAlign: 'center',
								width: '100%',
								color: 'white',
								left: '1%',
								right: '1%',
							}}
						>
							Contactos
						</h1>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col xs={12}>
						<Jumbotron style={{ marginBottom: 0 }}>
							<p>
								<span role="img" aria-label="Telemovel">
									📞
								</span>{' '}
								Telemovel:{' '}
								<a
									className="text-muted"
									href="tel:+351919732850"
								>
									+351 919 732 850
								</a>
							</p>
							<p>
								<span role="img" aria-label="Telefone">
									📞
								</span>{' '}
								Telefone Fixo:{' '}
								<a
									className="text-muted"
									href="tel:+351261324196"
								>
									+351 261 324 196
								</a>
							</p>
							<p>
								<span role="img" aria-label="E-mail">
									📨
								</span>{' '}
								E-mail:{' '}
								<a
									className="text-muted"
									href="mailto:maguiromero@gmail.com"
								>
									maguiromero@gmail.com
								</a>
							</p>
							<p>
								<span role="img" aria-label="Localização">
									📍
								</span>{' '}
								Morada:{' '}
								<span className="text-muted">
									Rua Guilherme Gomes Fernandes nº5, 2560-338
								</span>
							</p>
						</Jumbotron>
					</Col>
				</Row>
				<iframe
					title="as"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.5523564618416!2d-9.262188684263576!3d39.09389304294203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f2dc110de9711%3A0x551f7691ff547472!2sPizzaria%20Don%20Romero!5e0!3m2!1sen!2spt!4v1590552479691!5m2!1sen!2spt"
					width="100%"
					height="450"
					frameborder="0"
					style={{ border: 0 }}
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				/>
			</>
		);
	}
}

const shadow = {
	textShadow: '1px 1px 10px #000',
};

export default Contact;
