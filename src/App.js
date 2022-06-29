import React from "react";
import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export class App extends React.Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Welcome name="Mauro" />} />
				<Route path="/counter" element={<Counter />} />
			</Routes>
		);
	}
}
