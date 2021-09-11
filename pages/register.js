import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';

export const Register  = () => {
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
                title="Register"
            />
     
        </SafeAreaView>
    )
  }
  