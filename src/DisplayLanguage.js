import React from "react";
import { LanguageContext } from "./LanguageContext.js";

let Strings = {
	en: {
		SET_LANGUAGE: "INGLESE",
	},
	it: {
		SET_LANGUAGE: "ITALIANO",
	},
};
export class DisplayLanguage extends React.Component {
	render() {
		return (
			<LanguageContext.Consumer>
				{(language) => {
					return <div>{Strings[language].SET_LANGUAGE}</div>;
				}}
			</LanguageContext.Consumer>
		);
	}
}
