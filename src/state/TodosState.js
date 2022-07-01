import userEvent from "@testing-library/user-event";

const defaultState = [];

const ADD = "TODO@ADD";
const REMOVE = "TODO@REMOVE";
const EDIT = "TODO@EDIT";
const RESET = "TODO@RESET";

export function addTodo(todo) {
	return {
		type: ADD,
		payload: todo,
	};
}

export function removeTodo(id) {
	return {
		type: REMOVE,
		payload: id,
	};
}

export function editUser(id, data) {
	return {
		type: EDIT,
		payload: { id, data },
	};
}

export function resetTodos() {
	return {
		type: RESET,
	};
}

export function todosReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD: {
			return [...state, action.payload];
		}
		case REMOVE: {
			return state.filter((todo) => todo.id !== action.payload);
		}
		case EDIT: {
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload.data };
				}
				return todo;
			});
		}
		case RESET: {
			return defaultState;
		}
	}
}
