import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Social from "./components/socials";
import Donate from "./components/donate";

const MainPage: React.FC = () => {
	return (
		<div className="mainPage">
			<Container className="p-3">
				<h1 className="header centerText">Hello, it's RusAnonym site</h1>
				<Jumbotron>
					<h2 className="centerText">
						I am a novice backend developer from Russia
						<br />I write in JavaScript, TypeScript and Dart
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
		</div>
	);
};

export default MainPage;
