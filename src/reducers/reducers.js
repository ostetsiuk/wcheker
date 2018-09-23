import * as types from "../actions/action-types";

const initialState = {
  cities: [],
  defaultCity: '',
  currentCity: '',
  currentLat: '',
  currentLon: '',
};

function reducers (state = initialState, action) {
	var newstate = {};
	switch(action.type) {

    case types.ADD_DEFAULT_CITY:
	
		newstate = {...state, defaultCity: action.city};
		return newstate;
	  
	case types.ADD_CURRENT_CITY:
		
		newstate = {...state, currentCity: action.currentCity};
		return newstate;
	
	case types.ADD_COORDINATES:
		
		newstate = {...state, currentLat: action.lat, currentLon: action.lon};
		return newstate;
	
	case types.REMOVE_CITY_FROM_LIST:
		var index = state.cities.indexOf(action.city);
		var newList = state.cities.slice(0);
		newList.splice(index, 1);
		newstate = {...state, cities: newList};
		return newstate;
		
	case types.ADD_CITY_TO_LIST:
	if (state.cities.indexOf(action.city) !== -1) return state;
		else {
			var nList = state.cities.concat(action.city);
			newstate = {...state, cities: nList};
			return newstate;
		}

	default: return state;
  }

}

export default reducers;