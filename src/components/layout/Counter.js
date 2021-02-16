import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        this.setState({
            counter : this.state.counter+1
        })
    }

    decrement(){
        this.setState({
            counter : this.state.counter-1
        })
    }

    render() {
        return (
            <div>
                <h2>Counter : {this.state.counter}</h2>
                <button onClick={this.increment}>Add </button>
                <button onClick={this.decrement}>Minus</button>
            </div>
        )
    }
}
