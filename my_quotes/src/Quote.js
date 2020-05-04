import React from "react"; //always include
import "./Quote.css";

let quotesList = [
    {
        words: "You're off to great places, today is your day. Your mountain is waiting, so get on your way.",
        author: "Dr. Seuss"
    },
    {
        words: "You always pass failure on the way to success.",
        author: "Mickey Rooney",
    },
    {
        words: "It always seems impossible until it is done.",
        author: "Nelson Mandela",
    },
    {
        words: "All your dreams can come true if you have the courage to pursuse them.",
        author: "Walt Disney",
    },
    {
        words: "Attitudee is a little thing that makes a big difference.",
        author: "Winston Churchill",
    },
    {
        words: 'Tough times never last, but tough people do.',
        author: 'Robert H. Schuller',
    },
    {
        words: 'The sun himself is weak when he first rises, and gathers strenght and courage as the day gets on.',
        author: 'Charles Dickens',
    },
    {
        words: 'It\'s not whether you get knocked down, it\'s whether you get up.',
        author: 'Vince Lombardi',
    }
]

const Quote = props => {
    return (
        <div>
            <div className="websiteHead" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                Quotes of the Day
                {}
            </div>

            {/* fix here */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <div>
                    <button
                        className="generateButton"
                        onClick={() => props.generateQuote(
                            quotesList[Math.floor(Math.random() * quotesList.length)])
                        }
                    >
                        New Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quote;