import React from "react";
import { useState } from "react";

export function ClickCounter() {
	const [count, setCount] = useState(0);

	function counterIncrement() {
		setCount((count) => count + 1);
	}

	return (
		<div>
			<p>Counter: {count}</p>
			<button onClick={counterIncrement}>+1!</button>
		</div>
	);
}
