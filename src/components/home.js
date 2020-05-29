import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
	state = {};

	render() {
		return (
			<>
				<Row>
					<Col xs={12}>
						<video width="100%" autoPlay playsInline loop>
							<source
								src="/dom-romero/intro.mp4"
								type="video/mp4"
							/>
						</video>
					</Col>
				</Row>

				<Row className="mb-2">
					<Col xs={12}>
						<Link to="/menu">
							<Image src="/dom-romero/img/3.png" fluid />
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
								Menu
							</h1>
						</Link>
					</Col>
				</Row>

				{/*<Row className="mb-1">
					<Col xl={12}>
						<Carousel controls={false}>
							<Carousel.Item>
								<Image src="/img/6.jpeg" fluid />

								<Carousel.Caption>
									<h3 style={shadow}>Dom Romero</h3>
									<p style={shadow}>
										Pizzas artesanais desde 1996
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
		</Row>*/}

				<Row className="mb-1">
					<Col xs={12} md={3}>
						<Image
							src="https://colcacchio.co.za/wp-content/uploads/2018/05/MK-Profile.jpg"
							fluid
							style={{
								position: 'relative',
								top: '50%',
								transform: 'translateY(-50%)',
								align: 'center',
								width: '80%',
								marginLeft: '10%',
							}}
						/>
					</Col>

					<Col xs={12} md={9}>
						<p
							className="description"
							style={{ padding: '0 15px' }}
						>
							Aberta em 1996, a primeira pizzaria com forno a
							lenha de Torres Vedras.
							<br />
							Com estilo medieval, ambiente rústico e acolhedor,
							situada em plena zona histórica.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Image src="/dom-romero/img/7.jpg" fluid />
						<h3
							style={{
								...shadow,
								position: 'absolute',
								top: '10%',
								textAlign: 'center',
								width: '100%',
								color: 'white',
								left: '1%',
								right: '1%',
							}}
						>
							Delicie-se com os nossos pratos
						</h3>
					</Col>
				</Row>
			</>
		);
	}
}

const shadow = {
	textShadow: '1px 1px 10px #000',
};

export default Home;
