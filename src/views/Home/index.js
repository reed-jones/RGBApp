import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../../actions';
import { getFavourites } from '../../reducers';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
	...getFavourites(state)
});

const actions = {
	addToFavourites,
	removeFromFavourites
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
