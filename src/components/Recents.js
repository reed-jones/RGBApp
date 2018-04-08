import React, { Component } from 'react';
import {
	View,
	Button,
	ListView,
	FlatList,
	Text,
	TouchableOpacity
} from 'react-native';
import Favourite from './Favourite';

export default class Recents extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{ height: 160 }}>
				<FlatList
					data={this.props.favourites}
					horizontal={true}
					keyExtractor={({ item }) => ({ item })}
					renderItem={({ item }) => (
						<Favourite
							colour={item}
							onPress={() => this.props.onSelect(item)}
							onLongPress={() => this.props.onDelete(item)}
						/>
					)}
				/>
				<TouchableOpacity
					style={{
						// height: 150,
						padding: 30,
						backgroundColor: '#FFF',
						elevation: 1,
						margin: 10,
						width: '80%',
						marginLeft: '10%'
					}}
					onPress={this.props.onSave}
				>
					<Text style={{ textAlign: 'center', width: '100%' }}>
						Save New
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
