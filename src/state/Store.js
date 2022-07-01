import { configureStore } from "redux";
import {
	counterReducer,
	decrementCounter,
	incrementCounter,
	resetCounter,
} from "./CounterState";

export const store = configureStore(counterReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCounter(42));
