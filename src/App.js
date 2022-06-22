import React from "react";
import { TodoList } from "./TodoList.js";
import { LanguageContext } from "./LanguageContext.js";
import { DisplayLanguage } from "./DisplayLanguage.js";
import { Welcome } from "./Welcome.js";
import { Sum } from "./Sum.js";

export class App extends React.Component {
	render() {
		return (
			<div>
				<Sum />
			</div>
		);
	}
}
