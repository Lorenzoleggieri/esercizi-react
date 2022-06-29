import { useState } from "react";
import { GithubUser } from "./GithubUser";
import { Outlet, Link } from "react-router-dom";

export function GithubUserList() {
	const [userToPush, setUserToPush] = useState("");
	const [usersArray, setUsersArray] = useState([]);

	const inputBinder = (event) => {
		setUserToPush(event.target.value);
	};

	const arrayPush = () => {
		setUsersArray((array) => [...array, userToPush]);
	};

	return (
		<div>
			<input name="userToPush" onChange={inputBinder} />
			<button onClick={arrayPush}>Aggiungi utente</button>
			<ul>
				{usersArray.map((user, index) => (
					<li key={index}>
						<Link to={`/users/${user}`}>{user}</Link>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	);
}
