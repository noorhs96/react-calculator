import React, { Component } from 'react'
export default class button extends Component {



    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div>


                <div className="calculaitons">
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="*">*</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="/">÷</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="-">-</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="+">+</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="=">=</button>
                </div>
                <div className="numbers">
                    <div className="clear">
                        <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="clear">Clear</button>
                    </div>

                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="1">1</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="2">2</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="3">3</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="4">4</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="5">5</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="6">6</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="7">7</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="8">8</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="9">9</button>
                    <button className="Button" onClick={e => this.props.onClick(e.target.name)} name="0">0</button>
                </div>

            </div>
        )
    }
}
