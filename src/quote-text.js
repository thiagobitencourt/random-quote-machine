import './quote-text.css';

export function QuoteText(props) {
  return (
    <div className="quote-text">
      <span className="open">"</span>
      <span className="text" id="text">{props.quote}</span>
      <span className="author" id="author">{props.author}</span>
    </div>
  );
}
