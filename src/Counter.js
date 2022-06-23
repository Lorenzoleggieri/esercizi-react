import React, { useEffect } from "react";

export function Counter(props) {
	const [count, setCount] = setState(0);

	useEffect(() => {
		counterHandler();

		return () => {
			clearInterval(counterHandler);
		};
	}, []);

	const counterHandler = () => {
		setInterval(() => {
			setCount((count) => count + 1);
		}, 1000);

		return (
			<div>
				<h3>{count}</h3>
			</div>
		);
	};
}
