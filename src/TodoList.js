import React from "react";

export class TodoList extends React.Component {
	state = {
		todos: [],
		newstring: "",
	};

	setNewString = (event) => {
		this.setState({ newstring: event.target.value });
	};

	addNewTodo = () => {
		let { todos, newstring } = this.state;
		todos.push(newstring);
		this.setState({ newstring: "" });
		console.log(todos);
	};

	render() {
		return (
			<div>
				<h2>Todos:</h2>

				<div>
					<input onChange={this.setNewString} />
					<button onClick={this.addNewTodo}>Add the todo</button>
				</div>

				<ul>
					{this.state.todos.map((todo, index) => {
						return <li key={index}>{todo}</li>;
					})}
				</ul>
			</div>
		);
	}
}
