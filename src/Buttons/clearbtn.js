import React, { Component } from 'react'

export default class clearbtn extends Component {
    render() {
        let {result} = this.props;
        return (
          
                <div className="result">
        <a className="resulttext">{result}</a></div>
             
        )
    }
}
