import React from 'react';
import { Link } from 'react-router-dom'

export default function(props){
	return (
		<div className = "error">
			<p>{props.msg}</p>
			<p><Link to = '/search'>Search</Link></p>
		</div>
	)
} 