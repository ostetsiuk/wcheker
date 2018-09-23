import React from 'react';
import './index.css';
import Main from './components/Main';
import { Route, BrowserRouter } from 'react-router-dom'


export default (
	<BrowserRouter>
		<Route component = {Main}></Route>
	</BrowserRouter>
)
