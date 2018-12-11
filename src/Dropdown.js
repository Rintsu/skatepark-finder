import React, { Component } from 'react';
import Select from 'react-select';
import LocationInfo from './StatelessLocation';
import locationOptions from './locationOptions.js';

//Mapping all the dropdown menu options
const options = locationOptions.map( location => ({ label: location.name, value: location.name }));

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
