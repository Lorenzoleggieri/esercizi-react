import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Choose your path:</h1>
				<Link to="/">Home</Link>
				<hr />
				<Link to="/counter">Counter</Link>
				<hr />
				<Link to="users/:username">Username Selector</Link>
				<hr />
				<Routes>
					<Route path="/" element={<Welcome name="Mauro" />} />
					<Route path="counter" element={<Counter />} />
					<Route path="users/:username" element={<ShowGithubUser />} />
				</Routes>
			</div>
		);
	}
}
