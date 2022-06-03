import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return <Welcome age={1} name={<strong>Lorenzo</strong>}/>
    }
}