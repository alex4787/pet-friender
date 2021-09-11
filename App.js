import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { AddDog } from './pages/dogInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Dog Information" component={AddDog} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
