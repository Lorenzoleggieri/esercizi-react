import React from "react";
import { Welcome } from "./Welcome.js";
import { Login } from "./Login.js";

export class App extends React.Component {
	render() {
		return (
			<div>
				<Welcome name="Ermenegildo" age="182" />
				<Login />
			</div>
		);
	}
}
