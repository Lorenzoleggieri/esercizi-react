import { useContext } from "react";
import { LanguageContext } from "./LanguageContext.js";

export function DisplayLanguage() {
	const language = useContext(LanguageContext);

	return <h2>Current language: {language}</h2>;
}
