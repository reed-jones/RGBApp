import { Favourites } from './actionTypes';

export const addToFavourites = value => ({
	type: Favourites.ADD_TO_FAVOURITES,
	value
});

export const removeFromFavourites = value => ({
	type: Favourites.REMOVE_FROM_FAVOURITES,
	value
});
