import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
	constructor(props){
		super(props);
		this.state = {
			comments: [],
			name: '',
			comment: '',
			fullComment: '',
			date: ''
		}
	}
	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		});
	}
	handleCommentChange = (event) => {
		this.setState({
			comment: event.target.value
		});
	}

	handleSubmit = () => {
		let date = new Date().toLocaleString();
		let fullComment = this.state.name + ' wrote: ' + this.state.comment;
		this.setState({
			date: date,
			fullComment: fullComment,
			comments: [date, <br />, fullComment, <br />, ...this.state.comments]
		});
	}

	render(){
		return(
			<div>
				<h2>Comment on {this.props.name}</h2>
				<form>
					<input
						id="name"
						value={this.state.name}
						onChange={this.handleNameChange}
						type="text"
						placeholder="Your name"
					/> <br></br>

					<textarea
						id="comment"
						value={this.state.comment}
						onChange={this.handleCommentChange}
						type="text"
						placeholder="Write your comment here"
					/> <br></br>

					<input
						id="submit-btn"
						onClick={this.handleSubmit}
						type="button"
						value="Post"
					/>
				</form>
				<p>Comments:</p>
				<div>
					{this.state.comments}
				</div>
			</div>
		);
	}
}

export default Comment;
