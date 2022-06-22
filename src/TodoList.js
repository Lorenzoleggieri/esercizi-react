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

	handlerRemoveLiFromArray = (event) => {
		let temporarytoDos = [...this.state.todos];
		temporarytoDos.splice(event, 1);
		this.setState({ todos: temporarytoDos });
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

				{this.props.render(this.state.todos, this.handlerRemoveLiFromArray)}
			</div>
		);
	}
}
