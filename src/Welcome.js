import React from "react";
import { Age } from "./Age";

export function Welcome({ name = "utente", age = "0" }) {
	return (
		<div className="welcome">
			<p>Welcome {name}</p>
			<Age age={age} />
		</div>
	);
}
/* !! used before this.props.age to avoid age=0 render as 0*/

Welcome.defaultProps = {
	name: "Default",
};
