import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

import MainPage from "./pages/main/main";
import AttributionPage from "./pages/attribution/main";

const App: React.FC = () => {
	return (
		<>
			<Router basename="/">
				<Route exact path="/" component={MainPage} />
				<Route path="/attribution" component={AttributionPage} />
			</Router>
			<Navbar expand="lg" fixed="bottom" bg="dark" collapseOnSelect>
				<Navbar.Brand>RusAnonym Site</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#/">Main Page</Nav.Link>
						<Nav.Link href="#attribution">Attribution</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default App;
