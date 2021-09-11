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
                style={{marginHorizontal:70, marginTop:190, textAlign:'center'}}
            />
            <TextInput
                 secureTextEntry={true}
                 placeholder="Password"
                 onChangeText={onChangePassword}
                 value={password}
                 style={{marginHorizontal:70, marginTop:25, marginBottom: 100, textAlign:'center'}}
            />
            <Button
                title="Log In"
                style={{marginHorizontal:15, marginVertical:10}}
            />
  
            <TouchableOpacity
                style={{marginHorizontal:15, marginVertical:10}}
                onPress={()=>
                    navigation.navigate("Register")}>
              <Text style={{textAlign:"center"}}>Don't you have an account? Click here to register!</Text>
            </TouchableOpacity>
     
        </SafeAreaView>
    )
  }
  