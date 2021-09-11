import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';

export const Login  = ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
  
    return(
        <SafeAreaView>
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
            <Button
                title="Log In"
            />
  
            <TouchableOpacity
                onPress={()=>
                    navigation.navigate("Register")}>
              <Text>Don't you have an account? Click here to</Text>
            </TouchableOpacity>
     
        </SafeAreaView>
    )
  }
  