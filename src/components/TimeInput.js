import React, { Component } from 'react';
import { View } from 'react-native';
import NumericInput from './NumericInput';

export default class TimeInput extends Component {
	render() {
		return (
			<View style={{ flexDirection: 'row' }}>
				<NumericInput max={12} />
				<NumericInput max={59} />
			</View>
		);
	}
}
