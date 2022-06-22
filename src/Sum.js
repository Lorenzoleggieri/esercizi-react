import React from "react";

export function Sum({ numbers = [1, 2, 4, 5, 29] }) {
	const sum = numbers.reduce((a, b) => a + b);
	return <h2>somma: {sum}</h2>;
}
