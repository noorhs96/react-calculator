
import './App.css';
import '../src/Css.css';
import Btn from '../src/Buttons/button'
import Clearbtn from '../src/Buttons/clearbtn'
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if (button === "=") {
            this.calculate()
        }

        else if (button === "clear") {
            this.reset()
        }


        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result))
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };



    render() {
        return (
            <div className="container">
                <Clearbtn result={this.state.result}></Clearbtn>
                <Btn onClick={this.onClick}></Btn>
            </div>
        )
    }
}

