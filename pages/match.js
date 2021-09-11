import React from 'react';
import * as data from '../assets/fake-data.json'
import { DogCard } from '../components/dogCard'
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const Match = () => {
	return (
		<ListItem text="Hello"/>
	)
};

const leftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: '#40394a',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Text
        style={{
          color: '#1b1a17',
          paddingHorizontal: 10,
          fontWeight: '600',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}
      >
        Delete
      </Text>
    </View>
  );
};
const swipeFromLeftOpen = () => {
  alert('Swipe from left');
};
const swipeFromRightOpen = () => {
  alert('Swipe from right');
};
const ListItem = ({ text }) => (
  <Swipeable
    renderLeftActions={leftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableRightOpen={swipeFromRightOpen}
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
      <Text style={{ fontSize: 24 }} style={{ fontSize: 20 }}>
        {text}
      </Text>
    </View>
  </Swipeable>
);

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
