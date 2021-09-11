import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export const DogCard = ({ dog, setFriction }) => {
  if (!dog) {
    setFriction(5);

    return (
      <View style={styles.container}>
        <Text>No more recommendations.</Text>
      </View>
    )
  }

	return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{ uri: dog.avatar_url }}
      />
      <Text style={styles.h1}>{dog.dog_name}</Text>
      <Text>{dog.name}</Text>
    </View>
	)
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
	h1: {
		fontWeight: "bold",
		fontSize: 30,
    fontFamily: "",
	},
  profilePicture: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10,
  }
});
