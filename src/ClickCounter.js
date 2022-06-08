import React from "react";

export class ClickCounter extends React.Component {
state = {
    count: 0
}
counterIncrement() {
    this.setState((state) =>{
        return {
            count: state.count + 1
        }
    })
}

    render () {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.counterIncrement}>+1!</button>
            </div>
        )
    }
}