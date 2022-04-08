import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
useIsFocused;

const FocusedStatusBar = (props) => {
	const isFocused = useIsFocused();
	return isFocused ? <StatusBar {...props} animated={true} /> : null;
	return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
	container: {},
});

export default FocusedStatusBar;