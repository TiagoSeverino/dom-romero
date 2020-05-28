import React from 'react';
import { Container } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar';
import Footer from './components/footer';

import Home from './components/home';
import Menu from './components/menu';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Container fluid="xl" className="container-adaptive">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/menu">
							<Menu />
						</Route>
					</Switch>
				</Container>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
