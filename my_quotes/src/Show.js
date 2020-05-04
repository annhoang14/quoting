import React, { Component } from "react";
import "./Show.css";
import { isEmpty } from "lodash";

//Component needs parent <div> --> every other code needs to be within it
class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            see_quote: []
        }
        // super(props);
        // this.state = {
        //     orders: [
        //         { title: "Item 1", price: 10 },
        //         { title: "Item 2", price: 15 }
        //     ]
        // };

    }
    render() {

        return (
            //parent
            <div>
                <div className="randomQuote" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {this.props.see_quote.map(quote => {
                        return (
                            <div className="myQuote">
                                <h5>{quote.words}</h5>
                                <h5>-{quote.author}</h5>

                            </div>
                        );
                    })}
                </div>

            </div> //close parent
        );

    }
    //render(): returns what you want to be shown on the screen

}

export default Show;