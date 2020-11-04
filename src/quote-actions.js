export function QuoteActions(props) {
  const twitterLink = `https://twitter.com/intent/tweet?text=${props.quote} - ${props.author}`;
  const githuLink = 'https://github.com/thiagobitencourt/random-quote-machine';
  const style = {
    marginTop: 30,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto auto',
    gap: 10
  };

  return (
    <div style={style}>
      <button className="btn btn-primary" id="new-quote" onClick={() => props.newQuote()}>New quote</button>
      <span className="placeholder"></span>
      <a className="btn btn-outline-primary" href={twitterLink} rel="noreferrer" target="_blank" id="tweet-quote">
        <i class="fab fa-twitter"></i>
      </a>
      <a className="btn btn-outline-primary" href={githuLink} rel="noreferrer" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
  );
}
