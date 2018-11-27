import React, { Component } from 'react';
import Select from 'react-select';
import LocationInfo from './StatelessLocation';
import locationOptions from './locationOptions.js';

//https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json
//http://www.mattmorgante.com/technology/dropdown-with-react
//Check these later on for looping the dropdown list items
const options = [
	{ value: locationOptions[0].name, label: locationOptions[0].name},
	{ value: locationOptions[1].name, label: locationOptions[1].name},
	{ value: locationOptions[2].name, label: locationOptions[2].name},
	{ value: locationOptions[3].name, label: locationOptions[3].name},
	{ value: locationOptions[4].name, label: locationOptions[4].name},
	{ value: locationOptions[5].name, label: locationOptions[5].name}
];

let skateParkElement;

class Dropdown extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedOption: null
		};
		//Binding is not needed if the method syntax is: handleMethod = () => {}
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (selectedPark) => {
		this.setState({
			selectedOption: selectedPark
		});
		console.log(`Option selected: `, selectedPark.value);

		//Cannot use fetch() since the API is local
		//Checking which data to import from locationOptions.js, according to the selected dropdown option
		let locationData = checkOption();
		newOption(locationData);

			function checkOption(){
				for (let i = 0; i < locationOptions.length; i++){
					if(selectedPark.value === locationOptions[i].name){
						return locationOptions[i]
					}
				}
			}

			function newOption(locationData){
					//Populating the LocationInfo component with the right location data
					skateParkElement = <LocationInfo locationOptions = {locationData} />;
			}
	}

	render(){
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
