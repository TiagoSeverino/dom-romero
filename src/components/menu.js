import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';

const variants = [
	'danger',
	'warning',
	'success',
	'danger',
	'warning',
	'success',
];

class Menu extends Component {
	state = {
		menu: [],
		selected: undefined,
	};

	componentDidMount() {
		axios.get(`/menu.json`).then((res) => {
			this.setState({ menu: res.data });
		});
	}

	handleClick = (category) => {
		this.setState({ selected: category });
	};

	render() {
		const { menu, selected } = this.state;
		const vars = JSON.parse(JSON.stringify(variants));

		const display = selected
			? menu.find((m) => m.title === selected)
			: menu[0];

		return (
			<>
				<Row className="mt-3 mb-3">
					<Col xs={12}>
						<h1 style={{ textAlign: 'center' }}>Menu</h1>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col xs={12}>
						{menu &&
							menu.map((cat) => (
								<Col xs={4} style={{ padding: 0 }}>
									<Button
										variant={vars.pop()}
										onClick={() =>
											this.handleClick(cat.title)
										}
										className="ml-auto mr-auto"
										style={{
											width: `100%`,
										}}
									>
										{cat.title}
									</Button>
								</Col>
							))}
					</Col>
				</Row>

				<Row className="mb-2">
					<Col xs={12}>
						<h3 style={{ textAlign: 'center' }}>
							{display && display.title}
						</h3>
					</Col>
				</Row>
				<Row className="mb-2">
					<Col />

					<Col xs={8}>
						<ul>
							{display &&
								display.items.map((item) => (
									<li>
										<span style={{ float: 'left' }}>
											{item.name}{' '}
										</span>
										<span style={{ float: 'right' }}>
											{' '}
											{item.price}€
										</span>
									</li>
								))}
						</ul>
					</Col>
					<Col />
				</Row>
			</>
		);
	}
}

export default Menu;
