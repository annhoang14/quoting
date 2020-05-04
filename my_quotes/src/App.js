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
    newQuoteList.push(quote); //create a new list with one element with a quote

    this.setState(prevState => { //set state 
      if (this.state.see_quote.length !== 0) { //if see_quote list is not empty
        this.state.see_quote.pop(); //pop it, and be empty
      }

      return { see_quote: newQuoteList }; //then update see_quote to newQuoteList
    });


  };

  render() {
    return (
      <div className="main" style={{ display: "flex" }}>
        {console.log('quotes:', this.state.quotes)}
        <div style={{ flex: 2 }}>
          <Quote generateQuote={this.generateQuote} /> {/*pass button into Quote class*/}
          <Show see_quote={this.state.see_quote} /> {/*pass see_quote into Show to use*/}
        </div>
      </div>
    )
  };

};

export default App;
