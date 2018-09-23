import * as types from "./action-types";

export function addCity(city) {
	return{
		type: types.ADD_CITY, 
		city
	}
}
export function addDefaultCity(city){
	return{
		type: types.ADD_DEFAULT_CITY,
		city
	}
}
export function addCurrentCity(currentCity){
	return{
		type: types.ADD_CURRENT_CITY,
		currentCity
	}
}

export function addCoordinate(lat, lon){
	return{
		type: types.ADD_COORDINATES,
		lat,
		lon
	}
}
export function removeCityFromList(city){
	return{
		type: types.REMOVE_CITY_FROM_LIST,
		city
	}
}

export function addCityToList(city){
	return{
		type: types.ADD_CITY_TO_LIST,
		city
	}
}