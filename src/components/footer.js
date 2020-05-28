import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="pt-4 pt-md-5" style={{ textAlign: 'center' }}>
				<Row>
					<Col />
					<Col xs={12} md={4}>
						<h5>Siga-nos</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a
									className="text-muted"
									rel="noopener noreferrer"
									target="_blank"
									href="https://www.facebook.com/RestauranteDomRomero"
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
							</li>
							<li>
								<p className="text-muted mt-2">
									© 2020 Dom Romero
								</p>
							</li>
						</ul>
					</Col>
					<Col xs={12} md={4}>
						<h5>Contactos</h5>
						<ul className="list-unstyled text-small">
							<li>
								<p className="text-muted">
									Telemovel:{' '}
									<a
										className="text-muted"
										href="tel:+351919732850"
									>
										+351 919 732 850
									</a>
								</p>
							</li>
							<li>
								<p className="text-muted">
									Telefone Fixo:{' '}
									<a
										className="text-muted"
										href="tel:+351261324196"
									>
										+351 261 324 196
									</a>
								</p>
							</li>
							<li>
								<p className="text-muted">
									E-mail:{' '}
									<a
										className="text-muted"
										href="mailto:maguiromero@gmail.com"
									>
										maguiromero@gmail.com
									</a>
								</p>
							</li>
						</ul>
					</Col>

					<Col />
				</Row>
			</footer>
		);
	}
}

export default Footer;
