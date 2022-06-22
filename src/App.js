import React from "react";
import { TodoList } from "./TodoList.js";

export class App extends React.Component {
	render() {
		return (
			<div>
				<TodoList
					render={(todos, handlerRemoveLiFromArray) => {
						return (
							<ul>
								{todos.map((todo, index) => (
									<li key={index}>
										{todo}
										<button onClick={handlerRemoveLiFromArray}>
											Remove ToDo
										</button>
									</li>
								))}
							</ul>
						);
					}}
				/>
			</div>
		);
	}
}
