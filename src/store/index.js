import { /*applyMiddleware, compose,*/ createStore } from 'redux';
import Reducer from '../reducers';

export default function configureStore(initialState = undefined) {
	return createStore(Reducer, initialState);
}
