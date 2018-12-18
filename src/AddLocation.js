import React, { Component } from 'react';
import './AddLocation.css';

class AddLocation extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			address: '',
			typeOf: '',
			material: '',
			lightning: '',
			entranceFees: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = () => {

	}

	render(){
		return(
			<div className="locationForm">
				<h2>Add new location</h2>
				<form>
					<label>Name: </label>
						<input type="text" placeholder="Name of the skatepark" onChange={this.handleChange} /><br></br>
					<label>Address: </label>
						<input type="text" placeholder="Address" onChange={this.handleChange} /><br></br>
					<label>Skatepark type: </label>
						<input type="text" placeholder="e.g. street, mini, vert, pool" onChange={this.handleChange} /><br></br>
					<label>Material: </label>
						<input type="text" placeholder="e.g. concrete, wood, metal" onChange={this.handleChange} /><br></br>
					<label>Lights: </label>
						<input type="text" placeholder="Is there lights?" onChange={this.handleChange} /><br></br>
					<label>Entrance fees: </label>
						<input type="text" placeholder="Is there any entrance fees?" onChange={this.handleChange} /><br></br>
					<input id="submit-btn" type="button" value="Add" onClick={this.handleSubmit} />
				</form>
				<p>NOTE: All fields must be filled.</p>
			</div>
		);
	}
}

export default AddLocation;
