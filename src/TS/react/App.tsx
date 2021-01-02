import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Social from "./socials";

const App: React.FC = () => {
	return (
		<Container className="p-3">
			<h1 className="header" style={{ textAlign: "center" }}>
				Hello, it's RusAnonym site
			</h1>
			<Jumbotron>
				<h2>Hello</h2>
			</Jumbotron>
			<Social />
		</Container>
	);
};

export default App;
