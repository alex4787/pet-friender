import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


export const AddDog  = () => {
    const [name, onChangeName] = React.useState(null);
    const [breed, onChangeBreed] = React.useState(null);
    const [age, onChangeAge] = React.useState(null);
    const [sex, onChangeSex] = React.useState(null);
    const [bio, onChangeBio] = React.useState(null);
    
  
    return(
        <SafeAreaView>
            <View style={{flexDirection: 'row', marginHorizontal:15, marginVertical:10}}>
                <IconButton
                    icon="camera"
                    color={Colors.red500}
                    size={20}
                    onPress={() => {
                       console.log("a")
                        
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        console.log("a")
                        
                    }}>
                    <Text style={{marginVertical: 13}}>Add a picture of your beauty!</Text>
                </TouchableOpacity>    
            </View>

            <TextInput 
                placeholder="Name"
                onChangeText={onChangeName}
                value={name}
                style={{marginHorizontal:15, marginVertical:10}}
            />
            <TextInput 
                placeholder="Breed"
                onChangeText={onChangeBreed}
                value={breed}
                style={{marginHorizontal:15, marginVertical:10}}
            />
            <TextInput 
                placeholder="Sex"
                onChangeText={onChangeSex}
                value={sex}
                style={{marginHorizontal:15, marginVertical:10}}
            />
            <TextInput 
                placeholder="Year of birth"
                onChangeText={onChangeAge}
                value={age}
                style={{marginHorizontal:15, marginVertical:10}}
            />
            <TextInput 
                placeholder="Bio"
                onChangeText={onChangeBio}
                value={bio}
                multiline={true}
                style={{marginHorizontal:15, marginVertical:10}}
            />
        
            <Button
                title="Done"
                style={{marginHorizontal:15, marginVertical:10}}
            />
        </SafeAreaView>
    )
  }
  