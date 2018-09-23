import React, {Component} from 'react';
import CityList from './CityList';
import store from '../store';
import * as actions from '../actions/actions';

class Search extends Component{
	
	onSearch = (e) => {
		
    e.preventDefault();
    var latInput = this.latInp;
	var lonInput = this.lonInp;
	var cityInput = this.cityInp;
	var regexpCity = /^[a-zA-Z -]+$/;
	var regexpCoords = /^-{0,1}\d.+$/;
	if ((this.props.data.currentCity !== cityInput.value) && (cityInput.value !== '') && (cityInput.value.match(regexpCity)))
	{
		this.dataToStore(cityInput.value, '','');
	}
	else if (latInput.value.match(regexpCoords) && lonInput.value.match(regexpCoords)) {
		this.dataToStore('', latInput.value, lonInput.value);
	}
}

dataToStore = (city, lat, lon) =>{
	store.dispatch(actions.addCurrentCity(city));
	store.dispatch(actions.addCoordinate(lat, lon));
	if (city !=='') {store.dispatch(actions.addCityToList(city));}
	this.props.history.push('/');
}

remove = (city) => {
	store.dispatch(actions.removeCityFromList(city));
}
	
	render(){
		return(
			<div>
				<CityList cities = {this.props.data.cities} removeCity = {this.remove} getForecast = {this.dataToStore}/>
				<div className = "search-container">
					<form type="submit" onSubmit={this.onSearch}>
						<p>Enter your city:</p>
						<p>
							<input type = "text" placeholder = "city" ref={(input) => { this.cityInp = input; }} name = "cityName"/>
						</p>
						<p>or coordinates:</p>
						<p>
							<input type= "text" placeholder = 'latitude' ref={(input) => { this.latInp = input; }} name = "latInput"/>
							<input type= "text" placeholder = 'longtitude' ref={(input) => { this.lonInp = input; }} name = "lonInput"/>
						</p>
						<p>
							<input type = 'submit' value = 'Get it'/>
						</p>
					</form>
				</div>
			</div>
		)
	}
}

export default Search;
