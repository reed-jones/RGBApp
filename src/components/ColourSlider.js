import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

export default class ColourSlider extends Component {
	render() {
		return (
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginLeft: 25,
					marginRight: 25
				}}
			>
				<Text>{this.props.text}</Text>
				<Slider
					minimumValue={0}
					maximumValue={this.props.max || 255}
					step={1}
					style={{ width: '100%', flex: 1, height: 50 }}
					onSlidingComplete={this.props.onSlidingComplete}
					onValueChange={this.props.onValueChange}
					value={this.props.value}
				/>
			</View>
		);
	}
}
