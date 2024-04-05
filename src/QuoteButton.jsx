import React, { useState } from "react";
import './QuoteButton.css';
import Quote from './Quote';

const INSPIRATIONAL_QUOTES_API = "https://inspo-quotes-api.herokuapp.com/quotes/random";

/** Component for a quote generating button.
 *
 * Props:
 * - none
 *
 * State:
 * - quote
 * - btnText
 *
 * TodoApp -> QuoteButton -> Quote
 **/

function QuoteButton() {
    const initialBtnText = "Click here for an inspirational quote!";

    const [quote, setQuote] = useState("");
    const [btnText, setBtnText] = useState(initialBtnText);

    async function handleQuoteClick() {
        const response = await fetch(INSPIRATIONAL_QUOTES_API);
        const data = await response.json();
        setQuote(`${data.quote.text} - ${data.quote.author}`);
        setBtnText("Nü quøte");
    }

    return (
        <div className="QuoteButton">
            {quote !== "" && <Quote text={quote} />}
            <button className="QuoteButton-btn" onClick={handleQuoteClick}>{btnText}</button>
        </div>
    );
}

export default QuoteButton;
