import React from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export class App extends React.Component {
	render() {
		return (
			<div>
				<Routes>
					<Route path="/" element={<Welcome name="Mauro" />} />
					<Route path="counter" element={<Counter />} />
					<Route path="users/:username" element={<ShowGithubUser />} />
				</Routes>
			</div>
		);
	}
}
