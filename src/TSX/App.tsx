import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

import MainPage from "./pages/main/main";
import AttributionPage from "./pages/attribution/main";
import { SelectCallback } from "react-bootstrap/esm/helpers";

const App: React.FC = () => {
	const OnSelectNavBarHandler: SelectCallback = () => {
		return;
	};
	return (
		<>
			<Router basename="/">
				<Route exact path="/" component={MainPage} />
				<Route path="/attribution" component={AttributionPage} />
			</Router>
			<Navbar
				expand="lg"
				fixed="bottom"
				bg="dark"
				collapseOnSelect
				onSelect={OnSelectNavBarHandler}
			>
				<Navbar.Brand>RusAnonym Site</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="mr-auto"
						defaultActiveKey={window.document.location.hash || "#/"}
						fill
						variant="pills"
					>
						<Nav.Item>
							<Nav.Link href="#/">Main Page</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="#/attribution">Attribution</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default App;
