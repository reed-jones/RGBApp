import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default class Favourite extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableOpacity
				onPress={this.props.onPress}
				onLongPress={this.props.onLongPress}
				style={{
					width: 50,
					height: 50,
					borderRadius: 10,
					backgroundColor: '#fff',
					elevation: 3,
					marginTop: 10,
					marginBottom: 10,
					marginLeft: 5,
					marginRight: 5,
					padding: 5
				}}
			>
				<View
					style={{
						width: 40,
						height: 40,
						borderRadius: 10,
						elevation: 2,
						backgroundColor: this.props.colour
					}}
				/>
			</TouchableOpacity>
		);
	}
}
