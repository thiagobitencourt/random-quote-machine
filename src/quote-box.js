import React from 'react';
import { QuoteText } from './quote-text';
import { QuoteActions } from './quote-actions';
import getNewQuote from './quotes';

// eslint-disable-next-line no-undef
export class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    const initialQuote = getNewQuote();
    this.state = {
      author: initialQuote.author,
      quote: initialQuote.quote
    };
  }

  newQuote() {
    const newQuote = getNewQuote();
    this.setState(({ ...newQuote }));
  }

  render() {
    return (
      <div id="quote-box">
        <QuoteText quote={this.state.quote} author={this.state.author} />
        <QuoteActions quote={this.state.quote} author={this.state.author} newQuote={() => this.newQuote()}/>
        {/* <Credicts /> */}
      </div>
    );
  }
}
