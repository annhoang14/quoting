import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote.js";
import Show from "./Show.js";
import Button from "./Button.js";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      see_quote: []
    }
  }

  generateQuote = quote => {

    const newQuoteList = [];
    newQuoteList.push(quote);

    this.setState(prevState => {
      if (this.state.see_quote.length != 0) {
        this.state.see_quote.pop();
      }

      return { see_quote: newQuoteList };
    });


  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        {console.log('quotes:', this.state.quotes)}
        <div style={{ flex: 2 }}>
          <Quote generateQuote={this.generateQuote} />
        </div>
        <div style={{ flex: 2 }}>
          <Show see_quote={this.state.see_quote} />
        </div>
      </div>
    )
  };

};

export default App;
