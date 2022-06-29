import { useEffect, useState } from "react";

export function Counter(props) {
	const [count, setCount] = useState(0);

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
	};

	return (
		<div>
			<h3>Counter:{count}</h3>
		</div>
	);
}
