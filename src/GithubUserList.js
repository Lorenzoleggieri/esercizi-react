import { useState } from "react";
import { GithubUser } from "./GithubUser";

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
			{usersArray.map((user, index) => (
				<GithubUser key={index} username={user} />
			))}
		</div>
	);
}
