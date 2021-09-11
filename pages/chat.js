import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


export const Chat = ({ list }) =>{
  return (
    <View>
    {
      list.map((match, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{uri: match.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{match.name}'s {match.dogName}</ListItem.Title>
            <ListItem.Subtitle>{match.dog_name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
  </View>
  )
}
