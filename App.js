import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, DrawerLayoutAndroid, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { AddDog } from './pages/dogInfo';

const Stack = createNativeStackNavigator();

export default function App() {
	const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };
	const dropdownItems = data.dogs.map(dog => (
		{
			label: dog.name,
			value: dog.name,
		}
	))
	const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dropdownItems[0].value);
  const [items, setItems] = useState(dropdownItems);

  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
			<Image
				style={styles.profilePicture}
				source={{ uri: data.dogs[0].profilePictureUri }}
			/>
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				labelStyle={styles.h1}
				textStyle={{ paddingLeft: 0, marginLeft: 0, fontSize: 15, fontWeight: "normal" }}
				containerStyle={{ paddingLeft: 0, marginLeft: 0, borderColor: "#fff" }}
				dropDownContainerStyle={{ paddingLeft: 0, marginLeft: 0, borderColor: "white" }}
				style={{ marginLeft: 0, paddingLeft: 0, marginTop: 10, borderColor: "white" }}
				disableBorderRadius={true}
			/>
			{/*
			<View>
				<Button>
					<Text style={styles.h1}>{data.dogs[0].name}</Text>
				</Button>
			</View>
			*/}
    </View>
  );

  return (
    <NavigationContainer>
			<DrawerLayoutAndroid
				ref={drawer}
				drawerWidth={300}
				drawerPosition={drawerPosition}
				renderNavigationView={navigationView}
			>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ title: 'Welcome' }}
					/>
					 <Stack.Screen name="Register" component={Register} />
					 <Stack.Screen name="Dog Information" component={AddDog} />
				</Stack.Navigator>
			</DrawerLayoutAndroid>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	navigationContainer: {
		padding: 16,
		paddingTop: 50,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  },
	profilePicture: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	h1: {
		fontWeight: "bold",
		fontSize: 30,
	}
});

const data = {
	dogs: [
		{
			profilePictureUri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F03%2F09%2Fdog-dating-1.jpg",
			name: "Fluffy",
		}
	]
}
