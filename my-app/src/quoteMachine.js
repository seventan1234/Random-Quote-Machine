import React from 'react';
import quotes from './quotes';
import './quoteMachine.css';

class QuoteMachine extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
    this.i = 0;
    this.state = {
      text: quotes[this.i].quote,
      author: quotes[this.i].author
    };
  }
  
  handleClick() {
    const number = Math.floor(Math.random() * 8 + 0);
    if (number === this.i) 
      this.i = number + 1;
    else
      this.i = number;
     
    this.setState({
      text: quotes[this.i].quote,
      author: quotes[this.i].author
    });
  }
  
  render() {
    let tweet = "https://twitter.com/intent/tweet?text="; // tweeter api
    tweet += encodeURI(quotes[this.i].quote) + "&via=seventan1234"; // pre fill quote
    
    return (
    	<div className="App">
	      <div id="quote-box">
		      <a 
		        id="tweet-quote"
						className="btn btn-default"
		        role="button"
		        href={tweet}
		        target="_top"
		      >
		      	<i className="fab fa-twitter"></i> tweet
		      </a>
		      <p
						id="text"
						className="text-light blockquote"
					>
		      	<span className="large-quote-mark">&ldquo;</span>
		      	{this.state.text}
		      	<br />
		      	<span className="large-quote-mark">&rdquo;</span>
		      </p>
		      <p
						id="author"
						className="lead text-center"
					>
		      	- {this.state.author} -
		      </p>
		      <button 
		        id="new-quote"
		        className="btn btn-outline-primary btn-lg"
		        onClick={this.handleClick}
		      >
		      	New Quote
	      	</button>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
