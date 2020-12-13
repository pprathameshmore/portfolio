import React, { Component } from "react";
import Typewriter from "typewriter-effect";

import axios from "axios";

export class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    console.log(response.data.data[0]);
    this.setState({
      quote: response.data.data[0],
      isLoading: false,
    });
  }

  render() {
    const { quote, isLoading } = this.state;

    console.log("Loading");

    console.log("state", quote);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div
        className="quote card col shadow-lg p-3 mb-5 bg-white rounded alert"
        id="quote"
      >
        <div className="card-content text-center">
          <Typewriter
            options={{
              strings: `${quote.quoteText}`,
              autoStart: true,
              delay: 70,
            }}
          />
          {/* <p className="display-5">{quote.quote.quoteText}</p> */}
          <p className="display-5">{quote.quoteAuthor}</p>
          <a href="https://github.com/pprathameshmore/QuoteGarden">
            Quotes by QuoteGarden API
          </a>
        </div>
      </div>
    );
  }
}

export default Quote;
