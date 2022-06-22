import React from "react";
import { TodoList } from "./TodoList.js";
import { LanguageContext } from "./LanguageContext.js";
import { DisplayLanguage } from "./DisplayLanguage.js";

export class App extends React.Component {
	state = {
		language: "en",
	};

	handleLanguage = (event) => {
		this.setState({
			language: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<select value={this.state.language} onChange={this.handleLanguage}>
					<option value="en">ENGLISH</option>
					<option value="it">ITALIANO</option>
				</select>
				<LanguageContext.Provider>
					<DisplayLanguage />
				</LanguageContext.Provider>
			</div>
		);
	}
}
