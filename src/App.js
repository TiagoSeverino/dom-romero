import React from 'react';
import { Container } from 'react-bootstrap';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Container fluid="xl" className="container-adaptive mb-2">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
