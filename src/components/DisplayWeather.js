import React from 'react';
import WeekDay from './WeekDay'


function DisplayWeather(props){
	
	var days = props.data;
	if (days)return (
			days.map(function(day) {
				return( 
					<div key = {day.date} className = 'weather_forecast'>
						<img src = {day.day.condition.icon} alt = {day.day.condition.text}></img>
						<p>{day.maxtemp_c}</p>
						<p>{day.day.maxtemp_c}</p>
						<p>{day.day.mintemp_c}</p>
						<WeekDay data = {day.date}></WeekDay>
					</div>
					)
				}
			)
	)
	else return null;
}

export default DisplayWeather;