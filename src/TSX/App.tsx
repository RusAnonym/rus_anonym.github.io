import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Social from "./pages/socials";
import Donate from "./pages/donate";

const App: React.FC = () => {
	return (
		<Container className="p-3">
			<h1 className="header centerText">Hello, it's RusAnonym site</h1>
			<Jumbotron>
				<h2 className="centerText">
					I am a novice backend developer from Russia
					<br></br>I write in JavaScript, TypeScript, Dart
				</h2>
			</Jumbotron>
			<Jumbotron>
				<Social />
			</Jumbotron>
			<Jumbotron>
				<h3 className="header centerText">Donate to me :)</h3>
				<Donate />
			</Jumbotron>
		</Container>
	);
};

export default App;
