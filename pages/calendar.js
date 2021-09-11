import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { Agenda, CalendarList } from 'react-native-calendars';


export const Calendar  = ({navigation}) => {
    return(
        <View style={{height: 900}}>
          <Agenda
           items={{
            '2021-09-09': [{name: 'Grooming time'}],
            '2021-09-08': [{name: 'Playdate with Jack'}],
            '2021-09-11': [{name: 'Playdate with Meelo'}, {name: 'Vet Appointment'}]
          }}
          //selected={'2021-09-10'}
          minDate={'2020-09-10'}
          maxDate={'2022-05-30'}
          pastScrollRange={50}
          futureScrollRange={50}
          //showClosingKnob={false}
           renderItem={(item, firstItemInDay) => 
           {return (
           <View>
               <Text style={{marginTop:15, backgroundColor:'pink'}}>{item.name}</Text>
            </View>);}}
          markedDates={{
            '2021-09-09': {marked: true},
            '2021-09-08': {marked: true},
            '2021-09-11': {marked: true},
          }}
          />
        </View>
    )
  }
  
