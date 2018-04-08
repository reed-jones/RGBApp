import ScheduleScreen from './ScheduleScreen';
import { connect } from 'react-redux';
import { updateSchedule } from '../../actions';
import { getFavourites, getSchedule } from '../../reducers';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	...getFavourites(state)
});

const actions = {
	// addToFavourites,
	// removeFromFavourites
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen);
