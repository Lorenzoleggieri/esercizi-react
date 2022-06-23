import React, { useEffect } from "react";
import { useState } from "react";

export function ClickCounter({ onCounterChange }) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		onCounterChange(count);
	}, [count]);

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
