import React from 'react';

function WeekDay(props){
	var d = new Date();
	var year = props.data.substring(0, 4);
	var month = props.data.substring(5, 7);
	var day = props.data.substring(8, 10);
	d.setFullYear(year, month-1, day);
	var days = new Array (7);
	days[0] = 'Sun';
	days[1] = 'Mon';
	days[2] = 'Tue';
	days[3] = 'Wed';
	days[4] = 'Thu';
	days[5] = 'Fri';
	days[6] = 'Sat';
	return (<p>{days[d.getDay()]}</p>)
}

export default WeekDay;