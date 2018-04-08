import { combineReducers } from 'redux';
import favourites, * as fromFavourites from './FavouritesReducer';
import schedule, * as fromSchedule from './SchedulesReducer';

export default combineReducers({
	favourites,
	schedule
});

export const getFavourites = state =>
	fromFavourites.getFavourites(state.favourites);

export const getSchedule = state => fromSchedule.getSchedule(state.schedule);
