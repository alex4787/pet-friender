import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Pressable, TouchableHighlight, Modal } from 'react-native';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Map } from './pages/map';
import { ListItem, Avatar } from 'react-native-elements'
import { DogProfile } from './pages/dogProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RECOMMENDATION_LIST = [
    {
      name: "Lomta",
			id: 1,
			profilePictureUri: "https://i.pinimg.com/736x/be/e2/c4/bee2c48ef1b4d655afbd9df08b4c6e09.jpg",
			dogName: "Meelo",
			breed: "Bulldog",
			age: "2018",
			sex: "Male",
			bio: "Hey, Meelo is here! I'm a playful, energetic, good looking, pickle lover, charming bulldog. I'm looking for a female bulldog to start a family!",
			lookingFor: "Mating"
		},
    {
      name: 'Alex',
      id: 2,
      profilePictureUri: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
      dogName: 'Pickles',
      breed: "Bulldog",
			age: "2018",
			sex: "Male",
			bio: "Hey, Pickles is here! I'm a playful, energetic, good looking, pickle lover, charming bulldog. I'm looking for a female bulldog to start a family!",
			lookingFor: "Mating"
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
	const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data.dogs[0]);

	const SideBarLink = ({ onPress, text, icon }) => (
		<Pressable onPress={onPress}>
			<View style={{flexDirection: "row", alignItems: "center", marginLeft: 1, marginBottom: -10}}>
				{icon}
				<Text style={styles.paragraph}>{text}</Text>
			</View>
		</Pressable>
	)

  const navigationView = ({navigation}) => (
    <View style={[styles.navigationContainer]}>
			<Image
				style={styles.profilePicture}
				source={{ uri: value.profilePictureUri }}
			/>
			<View style={styles.centeredView}>
				<Modal
					animationType="fade"
					transparent={true}
					visible={open}
					onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						setOpen(!open);
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={{...styles.h1, fontSize: 20}}>Your Dogs</Text>
							{
								data.dogs.map(dog => (
									<Pressable onPress={() => {
										setValue(dog);
										setOpen(false);
									}}>
										<View style={{flexDirection: "row", alignItems: "center", marginLeft: 1, marginBottom: -10}}>
											<Avatar rounded source={{uri: dog.profilePictureUri}} />
											<Text style={styles.paragraph}>{dog.name}</Text>
											{(value == dog) && <Ionicons name="checkmark-outline" />}
										</View>
									</Pressable>
								))
								}
						</View>
					</View>
				</Modal>
			</View>
			<Pressable
				style={{marginVertical: 15}}
				onPress={() => setOpen(true)}
			>
				<View style={{flexDirection: "row", alignItems: "center", marginLeft: 1, marginBottom: -10}}>
					<Text style={styles.h1}>{value.name}</Text>
					<Ionicons name="chevron-down-outline" size={30} />
				</View>
			</Pressable>
			<View style={{zIndex: -5}}>
				<SideBarLink onPress={() => {navigation.navigate("Main")}} text="Home" icon={<Ionicons name="home-outline" size={30} />} />
				<SideBarLink onPress={() => {navigation.navigate("DogProfile")}} text="Dog Profile" icon={<MaterialCommunityIcons name="dog" size={30} />} />
        <SideBarLink onPress={() => {navigation.navigate("Calendar")}} text="My Calendar" icon={<Ionicons name="calendar-outline" size={30} />} />
        <SideBarLink onPress={() => {navigation.navigate("Map")}} text="Map" icon={<Ionicons name="map-outline" size={30} />} />
        <SideBarLink onPress={() => {navigation.navigate("DogProfile")}} text="Settings" icon={<Ionicons name="cog-outline" size={30} />} />
        <SideBarLink onPress={() => {navigation.navigate("DogProfile")}} text="Log Out" icon={<Ionicons name="log-out-outline" size={30} />} />
      </View>
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
      <Drawer.Screen name="DogProfile" children={(props) => <DogProfile dog={value} {...props}/>} options={{ title: value.name }} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
	)
}

const MainScreen = ({ dog, navigation }) => {
	const [matchList, setMatchList] = useState([]);
	const [recommendationList, setRecommendationList] = useState(RECOMMENDATION_LIST);
	const addToMatchList = (newDog) => {
		setMatchList(prevList => [...prevList, newDog]);
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
			<Tab.Screen name="Match" children={(props) => <Match recommendationList={recommendationList} addToMatchList={addToMatchList} {...props} />} options={{tabBarIcon:({ }) => (
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
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "90%"
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	}
});

