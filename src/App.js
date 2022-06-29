import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Choose your path:</h1>
				<Link to="/">Home</Link>
				<hr />
				<Link to="/counter">Counter</Link>
				<hr />
				<Link to="users/LorenzoLeggieri">My Github Username</Link>
				<hr />
				<Routes>
					<Route path="/" element={<Welcome name="Mauro" />} />
					<Route path="counter" element={<Counter />} />
					<Route path="users" element={<GithubUserList />}>
						<Route path=":username" element={<ShowGithubUser />} />
					</Route>
					<Route path="*" element={<h1>PAGINA NON TROVATA</h1>} />
				</Routes>
			</div>
		);
	}
}
