import React from "react";
import ReactDOM from "react-dom";

import App from "./TSX/App";

import lockDevTools from "./TS/scripts/devToolsLocker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/index.css";
import "./SCSS/main.scss";

if (process.env.NODE_ENV === "production") {
	lockDevTools.enableLock();
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
