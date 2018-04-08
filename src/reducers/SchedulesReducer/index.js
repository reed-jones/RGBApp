import { Schedule } from '../../actions/actionTypes';
const default_day = {
	enabled: false,
	startTime: '',
	endTime: '',
	startColour: '',
	endColour: ''
};

const DEFAULT_STATE = {
	schedule: {
		monday: default_day,
		tuesday: default_day,
		wednesday: default_day,
		thursday: default_day,
		friday: default_day,
		saturday: default_day,
		sunday: default_day
	}
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case Schedule.UPDATE_SCHEDULE:
			// value: { monday: { ...all_other_info } }
			return {
				...state,
				schedule: {
					...state.schedule,
					[Object.keys(action.value)[0]]:
						action.value[Object.keys(action.value)[0]]
				}
			};
		default:
			return state;
	}
};

export const getSchedule = ({ schedule }) => ({ schedule });
