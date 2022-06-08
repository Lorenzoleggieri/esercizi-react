import React from "react";

export class ClickTracker extends React.Component{
    state = {
        lastButtonClicked: "Click a Button to Start!"
    }

    buttonClickCheck = (event) => {
        this.setState({lastButtonClicked: event.target.name})
    }

    render() {
        return(
            <div>
                <button name="First" onClick={this.buttonClickCheck}>First</button>
                <button name="Second" onClick={this.buttonClickCheck}>Second</button>
                <button name="Third" onClick={this.buttonClickCheck}>Third</button>
                <p>Last Button Clicked: {this.state.lastButtonClicked}</p>
            </div>
        )
    }
}