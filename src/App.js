import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return <Welcome name="Lorenzo" />
    }
}