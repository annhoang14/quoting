import React, { Component } from 'react';
import './App.css';
import Quote from "./Quote.js";
import Show from "./Show.js";
import Button from "./Button.js";

/*
Another way to write state at the beginning of a class component is simply:
state = {see_quote: [] }

You will see both used in practice. 
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      see_quote: []
    }
  }
  /*
  I would like see_quote to be a string instead of a list with one element. 
  I would name this variable simply quote given the context. Someone reading the code would be able to pick up
  a difference between a quotes list and a quote being the one that is actually displayed.
  */

  /*
    I would like generateQuote to accept a string. then this.setState will look like:
    this.setState({quote: generatedQuote});
    No need to pass in prevState if we don't access it within this.setState. 
  */
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

//Always remove extraneous comments and console.logs from finished product

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
