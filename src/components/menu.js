import React, { Component } from 'react';
import {
	Row,
	Col,
	ButtonGroup,
	Button,
	Carousel,
	Image,
} from 'react-bootstrap';

const variants = [
	'danger',
	'warning',
	'success',
	'danger',
	'warning',
	'success',
];

const categorias = [
	{
		nome: 'Entradas',
		img: ['entradas.jpg'],
	},
	{
		nome: 'Acompanhamentos',
		img: ['acompanhamentos.jpg'],
	},
	{
		nome: 'Carne e Peixe',
		img: ['carnepeixe.jpg'],
	},
	{
		nome: 'Especialidades Italianas',
		img: ['italianas.jpg'],
	},
	{
		nome: 'Pizzas',
		img: ['pizzas1.jpg', 'pizzas2.jpg', 'pizzas3.jpg', 'pizzas4.jpg'],
	},
	{
		nome: 'Bebidas',
		img: ['bebidas1.jpg', 'bebidas2.jpg', 'bebidas3.jpg', 'bebidas4.jpg'],
	},
	{
		nome: 'Sobremesas',
		img: ['sobremesas.jpg'],
	},
];

class Menu extends Component {
	state = {
		menu: [],
		selected: undefined,
		activeIndex: 0,
	};

	handleClick = (category) => {
		this.setState({ selected: category, activeIndex: 0 });
	};

	handleSlide(key) {
		this.setState({
			activeIndex: key,
		});
	}

	render() {
		const { activeIndex, selected } = this.state;
		const vars = JSON.parse(JSON.stringify(variants));

		const display = selected
			? categorias.find((m) => m.nome === selected)
			: categorias[0];

		return (
			<>
				<Row className="mt-3 mb-3">
					<Col xs={12}>
						<h1 style={{ textAlign: 'center' }}>Menu</h1>
					</Col>
				</Row>
				<Row className="mb-4">
					<ButtonGroup
						style={{
							display: 'inline-block',
						}}
					>
						{categorias.map((cat, k) => (
							<Button
								variant={vars.pop()}
								onClick={() => this.handleClick(cat.nome)}
								className="ml-auto mr-auto"
								key={k}
								style={{
									width: `100%`,
								}}
							>
								{cat.nome}
							</Button>
						))}
					</ButtonGroup>
				</Row>
				<Row className="mb-2">
					<Col xs={12}>
						<Carousel
							interval={null}
							prevIcon={
								<span
									aria-hidden="true"
									className="carousel-control-prev-icon"
									style={{
										marginTop: '50px',
										backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e")`,
									}}
								/>
							}
							nextIcon={
								<span
									aria-hidden="true"
									className="carousel-control-next-icon"
									style={{
										marginTop: '50px',
										backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='black' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e")`,
									}}
								/>
							}
							controls={display.img.length > 1}
							activeIndex={activeIndex}
							onSelect={(key, evt) => this.handleSlide(key)}
						>
							{display &&
								display.img.map((image, k) => (
									<Carousel.Item key={k}>
										<Image
											src={`/dom-romero/ementa/${image}`}
											width="100%"
										></Image>
									</Carousel.Item>
								))}
						</Carousel>
					</Col>
				</Row>
			</>
		);
	}
}

export default Menu;
