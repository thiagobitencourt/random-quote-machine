import './quote-text.css';

export function QuoteText(props) {
  return (
    <div className="quote-text">
      <div className="open">"</div>
      <p className="text" id="text">{props.quote}</p>
      <div className="author" id="author">{props.author}</div>
    </div>
  );
}
