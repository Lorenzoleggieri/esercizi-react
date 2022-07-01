import { configureStore, combineReducers } from "redux";
import {
	counterReducer,
	decrementCounter,
	incrementCounter,
	resetCounter,
} from "./CounterState";
import {
	todosReducer,
	removeTodo,
	addTodo,
	resetTodos,
	editUser,
} from "./TodosState";

const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todosReducer,
});

export const store = configureStore(rootReducer);

store.subscribe(() => {
	console.log(store.getState());
}); //already done

store.dispatch(incrementCounter(42));
store.dispatch(addTodo({ id: 1, title: "compra pane", completed: true }));
store.dispatch(removeTodo(1));
store.dispatch(decrementCounter(12));
store.dispatch(editUser(1, { title: "compra pasta", completed: false }));
