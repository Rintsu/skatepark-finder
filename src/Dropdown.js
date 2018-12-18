import React, { Component } from 'react';
import Select from 'react-select';
import LocationInfo from './StatelessLocation';
import './index.css';

let skateParkElement;

class Dropdown extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedOption: null,
			skateparks: []
		};
		//Binding is not needed if the method syntax is: handleMethod = () => {}
		// this.handleChange = this.handleChange.bind(this);
	}

	//executes before rendering
	componentWillMount(){
		this.getParks();
	}

	getParks = () => {
		fetch('http://localhost:5000/parks')
		.then(response => response.json())
		.then(response => this.setState({
			skateparks: response.data
		}))
		.catch(err => console.error(err))
	}

	handleChange = (selectedPark) => {
		this.setState({
			selectedOption: selectedPark
		});
		console.log(`Option selected: `, selectedPark.value);

		//Checking which data to import from database based on user selection
		let locationData;
		let parks = this.state.skateparks;
		for (let i = 0; i < parks.length; i++){
			if(selectedPark.value === parks[i].skatepark_id){
				locationData = parks[i]
			}
		}
		skateParkElement = <LocationInfo locationOptions = {locationData} />;
	}

	//assigning the dropdown options
	renderParks = () => {
		let options = [];
		let parks = this.state.skateparks;
		for (let i = 0; i < parks.length; i++){
				options.push({value: parks[i].skatepark_id, label: parks[i].name});
		}
		return options;
	}

	render(){
		const options = this.renderParks();
		return(
			<div>
				<div className="dropdown">
					<Select
						value={this.state.selectedOption}
						onChange={this.handleChange}
						options={options}
						placeholder={`Choose skatepark`}
					/>
				</div>
				<div>
				 {skateParkElement}
			 </div>
	 	</div>);
	}
}

export default Dropdown;
