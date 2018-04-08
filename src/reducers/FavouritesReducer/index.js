import { Favourites } from '../../actions/actionTypes';

const DEFAULT_STATE = {
	favourites: []
};

const unique = arrArg =>
	arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos);

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case Favourites.ADD_TO_FAVOURITES:
			return {
				...state,
				favourites: unique([...state.favourites, action.value])
			};
		case Favourites.REMOVE_FROM_FAVOURITES:
			return {
				...state,
				favourites: state.favourites.filter(fav => fav !== action.value)
			};
		default:
			return state;
	}
};

export const getFavourites = ({ favourites }) => ({ favourites });
