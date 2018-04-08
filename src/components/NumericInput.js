import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class NumericInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.defaultValue
		};
	}
	validate = e => {
		// console.log(e);
		// let num = Math.max(Math.min(parseInt(e), this.props.max), 0);
		this.setState({ value: isNaN(e) ? '' : e + '' });
	};
	render() {
		return (
			<TextInput
				keyboardType="numeric"
				value={this.state.value}
				onChangeText={this.validate}
				maxLength={2}
			/>
		);
	}
}
