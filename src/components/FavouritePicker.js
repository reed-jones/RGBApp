import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Favourite from './Favourite';

export default class FavouritePicker extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favourite: ''
		};
	}
	render() {
		return (
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
		);
	}
}
