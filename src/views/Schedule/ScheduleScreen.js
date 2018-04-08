import React, { Component } from 'react';
import {
	View,
	Text,
	CheckBox,
	FlatList,
	Button,
	Picker,
	Switch,
	TextInput
} from 'react-native';
import DayOfWeekCheckbox from '../../components/DayOfWeekCheckbox';
import TimeInput from '../../components/TimeInput';
import FavouritePicker from '../../components/FavouritePicker';

export default class ScheduleScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: false,
			day: 'Monday'
		};
	}
	activeDayValue = () => {
		return this.state.days[this.state.day].enabled;
	};
	setActiveDayValue = enabled => {
		this.setState({
			days: {
				...this.state.days,
				[this.state.day]: {
					...this.state.days[this.state.day],
					enabled
				}
			}
		});
	};
	saveStart = colour => {
		console.log('Start: ' + colour);
	};
	saveEnd = colour => {
		console.log('End: ' + colour);
	};
	saveSchedule = () => {
		//axios send schedule to esp8266
		console.log('saved');
	};
	render() {
		return (
			<View>
				<Text>Schedule Page</Text>
				<Picker
					selectedValue={this.state.day}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ day: itemValue })
					}
					style={{ backgroundColor: '#eee' }}
				>
					<Picker.Item label="Monday" value="Monday" />
					<Picker.Item label="Tuesday" value="Tuesday" />
				</Picker>
				<View
					style={{ flexDirection: 'row', justifyContent: 'center' }}
				>
					<Text>Enabled</Text>
					<Switch
						value={this.activeDayValue()}
						onValueChange={e => {
							this.setActiveDayValue(e);
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<Text>Start Time:</Text>
						<TimeInput />
					</View>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<Text>End Time:</Text>
						<TimeInput />
					</View>
					<View style={{ height: 100 }}>
						<Text style={{ width: '100%', textAlign: 'center' }}>
							Start Colour:
						</Text>
						<FavouritePicker
							favourites={this.props.favourites}
							onSelect={this.saveStart}
							onDelete={() => {}}
						/>
					</View>
					<View style={{ height: 100 }}>
						<Text style={{ width: '100%', textAlign: 'center' }}>
							End Colour:
						</Text>
						<FavouritePicker
							favourites={this.props.favourites}
							onSelect={this.saveEnd}
							onDelete={() => {}}
						/>
					</View>
					<Button title="save" onPress={this.saveSchedule} />
				</View>
			</View>
		);
	}
}
