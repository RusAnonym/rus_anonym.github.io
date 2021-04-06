import React from "react";
import ReactDOM from "react-dom";

import App from "./TSX/App";

import "./TS/scripts/events";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/index.css";
import "./SCSS/main.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
