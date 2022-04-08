import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
	},
};

const App = () => {
	const [loaded] = useFonts({
		InterBold: require('./assets/fonts/Inter-Bold.ttf'),
		InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
		InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
		InterLight: require('./assets/fonts/Inter-Light.ttf'),
		InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
	});
	if (!loaded) return null;
	return (
		<NavigationContainer style={styles.container}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Home"
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
