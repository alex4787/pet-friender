import React, { useState, useRef } from 'react';
import * as data from '../assets/fake-data.json'
import { DogCard } from '../components/dogCard'
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Text, View, ImageBackground } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Match = ({ recommendationList, addToMatchList }) => {
  const swipeable = useRef(null);
  const [dogIndex, setDogIndex] = useState(0);
  const [friction, setFriction] = useState(1);

  const leftSwipeActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ccffbd', justifyContent: 'center', paddingLeft: 15 }}
      >
        <Ionicons name="checkmark-outline" size={40} />
      </View>
    );
  };
  const rightSwipeActions = () => {
    return (
      <View
        style={{ flex: 1, backgroundColor: '#ff8303', justifyContent: 'center' }}
      >
        <Ionicons name="close-outline" size={40} style={{position: 'absolute', right: 0, marginRight: 15}} />
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    addToMatchList(recommendationList[dogIndex]);
    alert(`${recommendationList[dogIndex].dogName} has been added!`);
    setDogIndex(prev => prev + 1);
    swipeable.current.close();
  };

  const swipeFromRightOpen = () => {
    setDogIndex(prev => prev + 1);
    swipeable.current.close();
  }

	return (
    <Swipeable
      ref={swipeable}
      renderLeftActions={leftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableLeftOpen={swipeFromLeftOpen}
      onSwipeableRightOpen={swipeFromRightOpen}
      friction={friction}
    >
      <View style={{backgroundColor: 'white'}}>
        <ImageBackground
          style={{
            paddingHorizontal: 30,
            paddingVertical: 20,
            height: 700,
          }}
          imageStyle={{opacity: 0.6}}
          source={{ uri: (dogIndex < recommendationList.length) && recommendationList[dogIndex].profilePictureUri }}
          blurRadius={5}
        >
          <DogCard dog={recommendationList[dogIndex]} setFriction={setFriction}/>
        </ImageBackground>
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
