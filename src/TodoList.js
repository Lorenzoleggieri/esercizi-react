import React from "react";

export class TodoList extends React.Component {
	state = {
		todos: [],
		newstring: "",
	};

	setNewString = (event) => {
		this.setState({ newstring: event.target.value });
	};

	addNewTodo = (event) => {
		event.preventDefault();
		let { todos, newstring } = this.state;
		event.target.elements.input.value = "";
		todos.push(newstring);
		this.setState({ newstring: "" });
		console.log(todos);
	};

	resetNewString = (event) => {
		event.preventDefault();
		this.setState({
			todos: [],
		});
	};

	render() {
		return (
			<div>
				<h2>Todos:</h2>

				<form onSubmit={this.addNewTodo}>
					<input name="input" onChange={this.setNewString} required />
					<button type="submit">Add the todo</button>
					<button onClick={this.resetNewString}>Reset</button>
				</form>

				<ul>
					{this.state.todos.map((todo, index) => {
						return <li key={index}>{todo}</li>;
					})}
				</ul>
			</div>
		);
	}
}
