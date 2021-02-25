import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {App} from "./App";


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route>
				<App />
			</Route>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

