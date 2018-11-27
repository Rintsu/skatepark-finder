import React, { Component } from 'react';
import CommentButton from './CommentButton';

const imgStyle = {
	height: "40vmin",
	width: "50vmin"
};

class LocationInfo extends Component {
	render(){
		return(
			<div>
				<h2>Skatepark Info</h2>
				<img src={this.props.locationOptions.images} style={imgStyle} alt="local-skatepark" />
				<p>Name: {this.props.locationOptions.name} </p>
				<p>Address: {this.props.locationOptions.address} </p>
				<p>Type: {this.props.locationOptions.type} </p>
				<p>Material: {this.props.locationOptions.material} </p>
				<p>Lightning: {this.props.locationOptions.lightning} </p>
				<p>Entrance fees: {this.props.locationOptions.entranceFees} </p>
				<div>
					<CommentButton name={this.props.locationOptions.name}/>
				</div>
			</div>
		)
	}
}

export default LocationInfo;
