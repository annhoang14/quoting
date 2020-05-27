import React, { Component } from 'react';
import './App.css';

import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenQuote: {
        words: "It always seems impossible until it is done.",
        author: "-Nelson Mandela"
      },
      quotesList: [
        {
          words: "You're off to great places, today is your day. Your mountain is waiting, so get on your way.",
          author: "-Dr. Seuss",
        },
        {
          words: "You always pass failure on the way to success.",
          author: "-Mickey Rooney",
        },
        {
          words: "It always seems impossible until it is done.",
          author: "-Nelson Mandela",
        },
        {
          words: "All your dreams can come true if you have the courage to pursuse them.",
          author: "-Walt Disney",
        },
        {
          words: "Attitude is a little thing that makes a big difference.",
          author: "-Winston Churchill",
        },
        {
          words: 'Tough times never last, but tough people do.',
          author: '-Robert H. Schuller',
        },
        {
          words: 'The sun himself is weak when he first rises, and gathers strenght and courage as the day gets on.',
          author: '-Charles Dickens',
        },
        {
          words: 'It\'s not whether you get knocked down, it\'s whether you get up.',
          author: '-Vince Lombardi',
        },
        {
          words: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
          author: "-Steve Jobs"
        },
        {
          words: "The only limit to our realization of tomorrow will be our doubts of today.",
          author: "-Franklin D. Rooservelt",
        },
        {
          words: "Creativity is intelligence having fun.",
          author: "-Albert Einstein",
        }

      ]
    }
  }

  generateQuote = () => {
    this.setState({
      chosenQuote: this.state.quotesList[Math.floor(Math.random() * this.state.quotesList.length)]
    })
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Quote of the Day</h1>
          <br />
          <Button
            className="generateQuote"
            shape="round"
            onClick={() => this.generateQuote()}
          >New Quote
          </Button>
        </header>
        <p className="quote">
          {this.state.chosenQuote.words}
          <br />
          {this.state.chosenQuote.author}</p>
      </div>
    )
  };

};

export default App;
