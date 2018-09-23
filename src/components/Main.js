import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Search from './Search';
import Container from './Container';
import { Route } from 'react-router-dom'; 
import * as actions from '../actions/actions';


class Main extends Component{
	
	componentDidMount(){
		window.addEventListener("beforeunload", this.handleLeavePage);
		
		if (this.props.currentCity ==''){
			if (this.props.lat =='' && this.props.lon == ''){
				if (!this.getStoredData() && navigator.geolocation) navigator.geolocation.getCurrentPosition(this.onResponse);
			}
		}
	}
	
	handleLeavePage(e){
		var storage = window.localStorage;
			if (storage){
				storage.setItem('city', this.props.defaultCity);
				storage.setItem('cityList', this.props.cities);
			}
	}
	
	getStoredData(){
		var storage = window.localStorage;
			if (storage.city){
				var homeCity = storage.city;
				store.dispatch(actions.addDefaultCity(homeCity));
				store.dispatch(actions.addCurrentCity(homeCity));
			}
			if (storage.cityList){
				let cityList = storage.cityList.split(',');
				store.dispatch(actions.addCityToList(cityList));
			}
			if (homeCity) return true;
				else return false;
		}
		
	onResponse(position){
			if (position){
				store.dispatch(actions.addCoordinate(position.coords.latitude, position.coords.longitude));
			}
		}
	
	render(){
		return(
		<div id = 'container'>
				<Route exact path='/' render = {(props) => 
					<Container {...props} 
						cityName = {this.props.currentCity} 
						defaultCity = {this.props.defaultCity}
						lat = {this.props.lat}
						lon = {this.props.lon}/>}
					/>
				<Route exact path='/search' render={(props) => <Search {...props} data = {this.props}/>}/>
		</div>
		)	
	}
}
	
function mapStateToProps(store) {
	
	return {
		cities: store.cities,
		defaultCity: store.defaultCity,
		currentCity: store.currentCity,
		lat: store.currentLat,
		lon: store.currentLon
	};
};

export default connect(mapStateToProps)(Main);