import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    handleButtonClick = () => {
        this.setState(prevState => { //updates state
            return { value: prevState.value + 1 };
            //prevState.value = old value of state.value
        });
    };

    render() {
        return (
            <div style={{ marginLeft: "10px" }}>
                {this.state.value}
                <button onClick={() => this.handleButtonClick()}>Click Me!</button>
            </div>
        );
    }
}

export default Button;
