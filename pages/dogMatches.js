import React from 'react';
import * as data from '../assets/fake-data.json'
import { DogCard } from '../components/dogCard'
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text } from 'react-native';

export const DogMatches = () => {
	const renderItem = ({ item }) => (
		<DogCard name={item.name}/>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={data.dogs}
				renderItem={renderItem}
				keyExtractor={item => item.id}
			/>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
