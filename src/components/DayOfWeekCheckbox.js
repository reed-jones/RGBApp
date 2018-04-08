import React, { Component } from 'react';
import { View, CheckBox, Text, Switch } from 'react-native';

export default class DayOfWeekCheckbox extends Component {
	render() {
		return (
			<View>
				<Switch
					value={this.props.day.selected}
					onValueChange={this.props.onValueChange}
				/>
				<Text>{this.props.day.day}</Text>
			</View>
		);
	}
}
