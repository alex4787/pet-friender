import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable } from 'react-native';
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
import { Calendar } from './pages/calendar';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MATCH_LIST = [
    {
      name: 'Lomta',
      avatar_url: 'https://i.pinimg.com/736x/be/e2/c4/bee2c48ef1b4d655afbd9df08b4c6e09.jpg',
      dog_name: 'Meelo',
      playdate: false,
      mating: true
    },
    {
      name: 'Alex',
      avatar_url: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      dog_name: 'Pickles',
      playdate: true,
      mating: false

    },
  ]


export default function App() {


  return (
    <NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Login" children={Login} />
				  <Stack.Screen name="Register" component={Register} />
				  <Stack.Screen name="Dog Information" component={AddDog} />
				  <Stack.Screen name="Home" component={HomeScreen} />

				</Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
	const dropdownItems = data.dogs.map(dog => (
		{
			label: dog.name,
			value: dog,
		}
	))
	const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dropdownItems[0].value);
  const [items, setItems] = useState(dropdownItems);

  const navigationView = () => (
    <View style={[styles.navigationContainer]}>
			<Image
				style={styles.profilePicture}
				source={{ uri: value.profilePictureUri }}
			/>
			<DropDownPicker
				open={open}
				value={value}
				items={items}
				setOpen={setOpen}
				setValue={setValue}
				setItems={setItems}
				labelStyle={styles.h1}
				dropDownContainerStyle={{ paddingLeft: -30, marginTop: 15, backgroundColor: "#eee" }}
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
		<Drawer.Navigator drawerContent={navigationView}>
      <Drawer.Screen name="Main" children={(props) => <MainScreen dog={value} {...props}/>} options={{ headerShown: false }} />
    </Drawer.Navigator>
	)
}

const MainScreen = ({ dog, navigation }) => {
	const [matchList, setMatchList] = useState(MATCH_LIST);
	const addToMatchList = (dog) => {
		setMatchList(prevList => [...prevList, dog]);
	}

	const HeaderBar = ({ title, value }) => (
		<Pressable style={styles.drawerOpener} onPress={() => navigation.openDrawer()}>
			<Image
				style={styles.miniProfilePicture}
				source={{ uri: value.profilePictureUri }}
			/>
		</Pressable>
	)

	return (
		<Tab.Navigator screenOptions={{ headerLeft: (props) => <HeaderBar value={dog} {...props} /> }}>
			<Tab.Screen name="Match" children={(props) => <Match addToMatchList={addToMatchList} {...props} />} options={{tabBarIcon:({ }) => (
				<Ionicons name="flame-outline" size={20} />
				)
			}} />
			<Tab.Screen name="Chat" children={(props) => <Chat list={matchList} {...props} />}  options={{tabBarIcon:({ }) => (
				<Ionicons name="chatbubbles-outline" size={20} />
				)
			}} />
		</Tab.Navigator>
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
	miniProfilePicture: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	h1: {
		fontWeight: "bold",
		fontSize: 30,
	},
	drawerOpener: {
		marginLeft: 15
	}
});

