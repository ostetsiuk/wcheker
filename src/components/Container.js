import React, {Component} from 'react';
import Header from './Header';
import Error from './Error';
import DisplayWeather from './DisplayWeather';
import './form.css'

class Container extends Component{

constructor(props) {
    super(props);
    this.state = {
	country:'',
	current:'',
	forecast:'',
	error: null,
	}; 
	
  }

componentDidMount(){
	if (this.props.cityName !==''){
			this.forecastRequest(this.props.cityName, null);
		}
		else if (this.props.lat !=='' && this.props.lon !=='') this.forecastRequest(this.props.lat, this.props.lon);
			//else this.setState({error: "Please enter your city or location first."});
}
		
forecastRequest(lat, lon){
	!lon ?
		fetch('https://api.apixu.com/v1/forecast.json?key=ee2fce3de2f44ad2bfe72955182903&q=' + lat + '&days=5')
		.then(response => response.json())
		.then(result => this.onSetResult(result))
		:
		fetch('https://api.apixu.com/v1/forecast.json?key=ee2fce3de2f44ad2bfe72955182903&q=' + lat +','+ lon + '&days=5')
		.then(response => response.json())
		.then(result => this.onSetResult(result));
}
onSetResult(forecastData){
	if (forecastData) {
		if (forecastData.error){
			this.setState({error: 'Something was wrong. Please check your internet connection or city name/location'});
			return;
		}
		else {
			this.setState({current: forecastData.current});
			this.setState({country: forecastData.location.country});
			this.setState({forecast: forecastData.forecast});
			this.setState({cityName: forecastData.location.name});
		}
	}
}

  shouldComponentUpdate(nextProps){
	  if (this.state.cityName === this.props.cityName) return false;
	  return true;
  }
  
  componentWillReceiveProps(nextProps){
	  if (nextProps.cityName !== this.props.cityName) this.forecastRequest(nextProps.cityName);
	  if (nextProps.lat !== this.props.lat || nextProps.lon !== this.props.lon) this.forecastRequest(nextProps.lat, nextProps.lon);
  }
	
render(){
	let city = this.props.cityName !== '' ? this.props.cityName : this.state.cityName;
	return(
		<div>
		{this.state.error ? <Error msg = {this.state.error}/> : 
		(<div>
		<Header cityName = {city} country = {this.state.country} defaultCity = {this.props.defaultCity}/>
			<div id = 'weather_display'>
				<div id = 'weather_temp'>
					<div className = 'weather-temp inline'>
						{this.state.current.temp_c}
					</div>
					<div className = 'weather-temp-feels inline'>
						Feels like:<p>{this.state.current.feelslike_c}</p>
						<img src = {((this.state.current || {}).condition || {}).icon} alt = {((this.state.current || {}).condition || {}).text}></img>
					</div>
				</div>
				<div className = 'data-content'>
					<div className = 'inline-parameters inline'>
						<p>Humidity</p>
						<p>{this.state.current.humidity}</p>
					</div>
					<div className = 'inline-parameters inline'>
						<p>Wind</p>
						<p>{this.state.current.wind_kph}</p>
					</div>
					<div className = 'inline-parameters inline'>
						<p>Presure</p>
						<p>{this.state.current.pressure_mb}mb</p>
					</div>
				</div>
				<div className = 'data-content'>
					<DisplayWeather data = {this.state.forecast.forecastday}></DisplayWeather>
				</div>
			</div>
		</div>
		)
	}</div>
)} 
}

export default Container;