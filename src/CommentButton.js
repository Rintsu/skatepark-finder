import React, { Component } from 'react';
import './index.css';
import './CommentButton.css';
import CommentForm from './CommentForm';

class CommentButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHidden: false
		};
	}
	
	toggleHidden = () => {
		this.setState({
			isHidden: !this.state.isHidden
		});
	}

	//name prop was given to CommentButton in StatelessLocation.js and now passed on to CommentForm
	//so that we can use the current selected skatepark name in the header

	render(){
		return(
			<div>
				{ this.state.isHidden ?
					<CommentForm name={this.props.name} /> :
					<button onClick={this.toggleHidden}>Comment this skatepark</button>
				}
			</div>
		)
	}
}

export default CommentButton;
