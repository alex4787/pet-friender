import React from 'react';
import * as data from '../assets/fake-data.json'
import { DogCard } from '../components/dogCard'
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';

export const DogMatches = () => (
	<SafeAreaView style={styles.container}>
		<FlatList
			data={data}
			renderItem={DogCard}
			keyExtractor={item => item.id}
		/>
	</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
