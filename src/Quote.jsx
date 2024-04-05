import React from "react";
import "./Quote.css";

/** Component for a quote generating button.
 *
 * Props:
 * - text
 *
 * State:
 * none
 *
 * QuoteButton -> Quote
 **/

function Quote({ text }) {
    return (
        <div className="Quote">
            <i>{text}</i>
        </div>
    );
}

export default Quote;