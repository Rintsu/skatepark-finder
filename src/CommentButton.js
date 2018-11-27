import React, { Component } from 'react';
import './index.css';
import './CommentButton.css';
import Comment from './Comment';

let commentElement;

class CommentButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		};
	}
	handleChange = () => {
		this.setState(prevState => ({
			clicked: !prevState.clicked
		}));
		//name prop was given to CommentButton in StatelessLocation.js and now passed on to Comment
		//so that we can use the current selected skatepark name in the header
		commentElement = <Comment name={this.props.name} />;
	}

	render(){
		return(
			<div>
				<button onClick={this.handleChange}>Comment this skatepark</button>
				{commentElement}
			</div>
		)
	}
}

export default CommentButton;
