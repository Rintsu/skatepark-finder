import React, { Component } from 'react';

class CommentList extends Component {

	render(){
		return(
			<div>
				{this.props.comments}
			</div>
		)
	}
}

export default CommentList;
