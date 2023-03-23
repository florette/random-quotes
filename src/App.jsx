import { useState, useEffect } from "react";
import "./App.css";

const colours = [
    "Aqua",
    "Coral",
    "CornflowerBlue",
    "Crimson",
    "DarkBlue",
    "DarkMagenta",
    "DarkSlateGrey",
    "DarkSlateBlue",
    "DarkSeaGreen",
    "Gold",
    "LightSeaGreen",
    "Teal",
    "RosyBrown",
    "LightSkyBlue",
    "LightPink",
    "FireBrick",
    "DarkGreen",
    "PaleVioletRed",
];

function App() {
    const [quote, setQuote] = useState({});
    const [quoteColour, setQuoteColour] = useState("white");

    useEffect(() => {
        getQuote();
    }, []);

    useEffect(() => {
        setQuoteColour(colours[Math.floor(Math.random() * colours.length)]);
    }, [quote]);

    const getQuote = () => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => setQuote(data));
    };

    console.log(quote);

    const newQuote = () => {
        getQuote();
    };

    const tweeterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.content}" ${quote.author}`;

    return (
        <div className="app-wrapper" style={{ backgroundColor: quoteColour }}>
            <div className="app" id="quote-box" style={{ color: quoteColour }}>
                <div id="text">
                    <i className="fa fa-quote-left"></i> {quote.content}
                </div>
                <div id="author">- {quote.author}</div>
                <div className="controls">
                    <a
                        id="tweet-quote"
                        href={tweeterUrl}
                        style={{ color: quoteColour }}>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <button
                        id="new-quote"
                        onClick={newQuote}
                        style={{ backgroundColor: quoteColour }}>
                        New quote
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
