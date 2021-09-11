import React, { useState } from 'react';
import * as data from '../assets/fake-data.json'
import { DogCard } from '../components/dogCard'
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Match = ({ matchList, addToMatchList }) => {
  const [dog, setDog] = useState(matchList[0]);

  const leftSwipeActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
      >
        <Ionicons name="checkmark-outline" size={20} />
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ff8303', justifyContent: 'center' }}
      >
        <Ionicons name="close-outline" size={20} />
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    alert('Swipe from left');
  };

	return (
    <Swipeable
      renderLeftActions={leftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <View
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: 'white',
          height: 700,
        }}
      >
        <DogCard dog={dog}/>
      </View>
    </Swipeable>
	)
};

const styles = StyleSheet.create({
	match: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: "salmon"
	},
  container: {
    flex: 1,
  },
});
