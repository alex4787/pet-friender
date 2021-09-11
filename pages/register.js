import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
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
                <Image
                source={require('../assets/doggo.png')}
                style={{height:270, width:370, alignSelf:'center', marginTop:50}}/>
            <TextInput 
                placeholder="Username"
                onChangeText={onChangeUsername}
                value={username}
                style={{marginHorizontal:70, marginTop:50, textAlign:'center'}}
            />
            <TextInput 
                placeholder="Email"
                onChangeText={onChangeEmail}
                value={email}
                style={{marginHorizontal:70, marginTop:20, textAlign:'center'}}
            />
            <TextInput
                 secureTextEntry={true}
                 placeholder="Password"
                 onChangeText={onChangePassword}
                 value={password}
                 style={{marginHorizontal:70, marginTop:20, textAlign:'center'}}
            />
            <View style={{flexDirection: 'row', marginLeft:95, marginVertical:10, textAlign:'center'}}>
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
                    <Text style={{marginVertical: 13, alignSelf:'center'}}>Add your dog information</Text>
                </TouchableOpacity>    
            </View>
            <Button
                title="Register"
                disabled={disabled}
								onPress={() => {
										navigation.navigate("Home")
								}}
                style={{marginHorizontal:15, marginVertical:10}}
            />
        </SafeAreaView>
    )
  }
  
