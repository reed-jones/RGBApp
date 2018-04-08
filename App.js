import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { Platform, StyleSheet, Text, View } from 'react-native';

import configureStore from './src/store';
import Router from './src/router';

const store = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}
