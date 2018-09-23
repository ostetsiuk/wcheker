import React, {Component} from 'react';
import store from '../store';
import * as actions from '../actions/actions';
import { Link } from 'react-router-dom'

class Header extends Component {
	constructor (props){
		super(props);
		this.setAsDefaultCity = this.setAsDefaultCity.bind(this);
	}
	
	home = (e) => {
		store.dispatch(actions.addCurrentCity(this.props.defaultCity));
	}

	setAsDefaultCity(){
			store.dispatch(actions.addDefaultCity(this.props.cityName));
		}
		
	render () {
		return (
			<span className ='name-conatiner'>
				<p className = 'city_name'>
					<Link to = '/search'>{this.props.cityName}</Link>
				</p>
				<p>{this.props.country}</p>
				<p className = 'home-manager'>
					<span className = 'action' onClick = {this.home}>show for home</span>
					<span> | </span>
					<span  className = 'action' onClick = {this.setAsDefaultCity}>set as home</span>
					<span> | </span>
					<span> 
						<Link to = '/search'>search</Link> 
					</span>
				</p>
			</span>
			)
	}
}

export default Header;