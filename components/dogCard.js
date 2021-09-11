import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const DogCard = ({ name }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.title}>{name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
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
