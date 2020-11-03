export function QuoteActions(props) {
  const twitterLink = `https://twitter.com/intent/tweet?text=${props.quote} - ${props.author}`;
  return (
    <div>
      <a href={twitterLink} rel="noreferrer" target="_blank" id="tweet-quote">Tweet</a>
      <button id="new-quote" onClick={() => props.newQuote()}>New quote</button>
    </div>
  );
}
