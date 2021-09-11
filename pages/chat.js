import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const list = [
    {
      name: 'Lomta',
      avatar_url: 'https://i.pinimg.com/736x/be/e2/c4/bee2c48ef1b4d655afbd9df08b4c6e09.jpg',
      dog_name: 'Meelo'
    },
    {
      name: 'Alex',
      avatar_url: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      dog_name: 'Pickles'
    },
  ]


export const Chat = () =>{
  return (
    <View>
    {
      list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{uri: l.avatar_url}} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.dog_name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))
    }
  </View>
  )
}
