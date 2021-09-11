import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

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
            <View style={{flexDirection: 'row'}}>
                <IconButton
                    icon="plus"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                />
                <TouchableOpacity>
                    <Text style={{marginVertical: 13}}>Add your dog</Text>
                </TouchableOpacity>    
            </View>
            <Button
                title="Register"
            />
        </SafeAreaView>
    )
  }
  