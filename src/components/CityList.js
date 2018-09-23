import React from 'react';
import './CityList.css';

export default function CityList(props){
	
		if (props.cities){
			var places = props.cities;
			places.sort();
			
			return (
			<div className = 'data-list'>
			{places.map(
					function(city){
						if (city !== '') {
							return (
								<div key = {city} className = 'data-list-item'>
									{city}
									<div className = "data-list-control">
										<button onClick = {props.getForecast.bind(null, city, '', '')} className="delete">Select</button>
										<button onClick = {props.removeCity.bind(null, city)} className="delete">Delete</button>
									</div>
								</div>
								)
							} 
						else return null;
					}
				)}
			</div>
		)}
		else return null;
	}