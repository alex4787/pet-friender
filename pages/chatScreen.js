import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import { ListItem, Avatar } from 'react-native-elements'

export const ChatScreen = ({ navigation, match }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey! Wanna organize a playdate this weekend?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: match.profilePictureUri,
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    padding: 20
  },
	h1: {
		fontWeight: "bold",
		fontSize: 30,
	},
});

