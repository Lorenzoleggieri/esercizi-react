import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{

    state = {
        name: "",
    }

    change = (event) => {
        this.setState({name: event.target.value})
    }



    render () {
        return (
            <div>
            <input onChange={this.change} value={this.state.name}/>
            <Welcome name={this.state.name}/>
            </div>
        )
    }
}