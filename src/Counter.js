import React from "react";

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
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}