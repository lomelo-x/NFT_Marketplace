import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

function HomeScreen(props) {
	return (
		<SafeAreaView style={styles.container}>
			<FocusedStatusBar background={COLORS.primary} />

			<View style={styles.container}>
				<Text>Home Screen</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
