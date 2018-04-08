import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../views/Home';
import ScheduleScreen from '../views/Schedule';

export default TabNavigator(
	{
		Home: { screen: HomeScreen },
		Schedule: { screen: ScheduleScreen }
	},
	{
		navigationOptions: ({ navigation }) => ({
			// tabBarIcon: ({ focused, tintColor }) => {
			// 	const { routeName } = navigation.state;
			// 	let iconName;
			// 	if (routeName === 'Home') {
			// 		iconName = `ios-information-circle${
			// 			focused ? '' : '-outline'
			// 		}`;
			// 	} else if (routeName === 'Settings') {
			// 		iconName = `ios-options${focused ? '' : '-outline'}`;
			// 	// You can return any component that you like here! We usually use an
			// 	// icon component from react-native-vector-icons
			// 	return <Ionicons name={iconName} size={25} color={tintColor} />;
			// }
		}),
		tabBarOptions: {
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray'
		},
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: false
	}
);
