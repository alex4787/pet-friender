import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

let dogs = ['a']
let disabled = true

export const Register  = ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [username, onChangeUsername] = React.useState(null);
  
    if (dogs.length > 0) disabled = false;
    return(
        <SafeAreaView>
            <TextInput 
                placeholder="Username"
                onChangeText={onChangeUsername}
                value={username}
            />
            <TextInput 
                placeholder="Email"
                onChangeText={onChangeEmail}
                value={email}
            />
            <TextInput
                 secureTextEntry={true}
                 placeholder="Password"
                 onChangeText={onChangePassword}
                 value={password}
            />
            <View style={{flexDirection: 'row'}}>
                <IconButton
                    icon="plus"
                    color={Colors.red500}
                    size={20}
                    onPress={() => {
                        disabled = false
                        navigation.navigate("Dog Information")
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        disabled = false
                        navigation.navigate("Dog Information")
                    }}>
                    <Text style={{marginVertical: 13}}>Add your dog</Text>
                </TouchableOpacity>    
            </View>
            <Button
                title="Register"
                disabled={disabled}
								onPress={() => {
										navigation.navigate("Home")
								}}
            />
        </SafeAreaView>
    )
  }
  
