import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, DrawerLayoutAndroid, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { AddDog } from './pages/dogInfo';
import { Match } from './pages/match';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as data from './assets/fake-data.json'
import { Chat } from './pages/chat';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Login" component={Login} />
				  <Stack.Screen name="Register" component={Register} />
				  <Stack.Screen name="Dog Information" component={AddDog} />
				  <Stack.Screen name="Home" component={HomeScreen} />

				</Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
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
	const bottomTabBar = ({ state, descriptors, navigation }) => {
		return (
			<View style={{ flexDirection: 'row' }}>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							// The `merge: true` option makes sure that the params inside the tab screen are preserved
							navigation.navigate({ name: route.name, merge: true });
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={{ flex: 1 }}
						>
							<Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
		);
	}

	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition={drawerPosition}
			renderNavigationView={navigationView}
		>
			<Tab.Navigator>
				<Tab.Screen name="Match" component={Match} options={{tabBarIcon:({ }) => (
          <Ionicons name="flame-outline" size={20} />
					)
				}} />
        <Tab.Screen name="Chat" component={Chat}  options={{tabBarIcon:({ }) => (
          <Ionicons name="chatbubbles-outline" size={20} />
					)
				}} />
			</Tab.Navigator>
		</DrawerLayoutAndroid>
	)
}

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

