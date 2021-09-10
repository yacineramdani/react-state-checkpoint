import React, { Component } from "react"
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count : 0,
          }
    }
    addOne = () => {
        this.setState ({
            count : this.state.count + 1 
        })
    }
    minusOne = () => {
        this.setState ({
            count : this.state.count - 1
        })
    }
    reset = () => {
        this.setState({
            count : 0
        })
    }

    render() { 
        return (
            <div style={{marginTop:"150px", fontSize:"30px"}}>
                <h1>{this.state.count}</h1>
                <div className="buttons">
                    <button style={{width:"60px", height:"60px"}} onClick={this.addOne}>+</button>
                    <button style={{width:"60px", height:"60px"}} onClick={this.reset}>Reset</button>
                    <button style={{width:"60px", height:"60px"}} onClick={this.minusOne}>-</button>
                </div>
            </div>
          );
    }
}
 
export default Count ;