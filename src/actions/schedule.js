import { Schedule } from './actionTypes';

export const updateSchedule = value => ({
	type: Schedule.UPDATE_SCHEDULE,
	value
});
