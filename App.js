import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}

class Home extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#eb4d4b'
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<Text>HOME</Text>
			</View>
		);
	}
}

const AppStackNavigator = createStackNavigator(
	{
		Home: Home
	},
	{
		initialRouteName: 'Home'
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: 'orange'
			}
		}
	}
);

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
