import React, { Component } from 'react';
import './index.css';
import './AddLocation.css';
import AddLocation from './AddLocation';

let newParkElement;

class AddLocationButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			clicked: false
		};
	}
	handleClick = () => {
		this.setState(prevState => ({
			clicked: !prevState.clicked
		}));

		newParkElement = <AddLocation />;
	}


	render(){
		return(
			<div className="addParkBtn">
				<button onClick={this.handleClick}>Add new skatepark</button>
				{newParkElement}
			</div>
		)
	}
}

export default AddLocationButton;
