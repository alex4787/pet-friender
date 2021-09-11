import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { ChatScreen } from './chatScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Chat = ({ navigation, list }) =>{
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ChatList" children={props => <ChatList list={list} {...props} />} />
      {
        list.map(match => (
          <Stack.Screen name={match.name} children={props => <ChatScreen match={match} {...props} /> } />
        ))
      }
    </Stack.Navigator>
  )
}

const ChatList = ({ navigation, list }) => (
  <View>
    {
      list.map((match, i) => (
        <ListItem key={i} bottomDivider onPress={() => navigation.navigate(match.name)}>
          <Avatar rounded source={{uri: match.profilePictureUri}} />
          <ListItem.Content>
            <ListItem.Title>{match.name}'s {match.dogName}</ListItem.Title>
            <ListItem.Subtitle>{match.dogName}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
  </View>
)
