import { DogCard } from "../components/dogCard";
import React from 'react';
import { StyleSheet, View } from 'react-native'


export const DogProfile = ({dog}) => {
  return (
    <View style={styles.container}>
      <DogCard dog={dog} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
})