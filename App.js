import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
		</View>
	)
};

const Login = () => {
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

          <TouchableOpacity>
            <Text>Don't you have an account? Click here to</Text>
          </TouchableOpacity>
   
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
