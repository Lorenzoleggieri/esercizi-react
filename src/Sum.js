import React from "react";

export function Sum({ numbers }) {
	const sum = numbers.reduce((a, b) => a + b);
	return <h2>somma: {sum}</h2>;
}
