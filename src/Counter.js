import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
    state = {
        count:0
    }
    constructor(props) {
        super(props)

        setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count+1
            }
        })
    }, this.props.incrementTimer)
    }
    render () {
        return (
            <div>
            <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}