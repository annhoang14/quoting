import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    /*This is an appropriate use of prevState. Only comment is what is your reasoning for 
    wanting to display the quote number? 
    
    I also do not see this.state.value anywhere on the UI if you meant for it to appear.*/
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
