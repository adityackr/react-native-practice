import React, { useState } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	TouchableNativeFeedback,
	View,
} from 'react-native';

const Playground = () => {
	const [rippleColor, setRippleColor] = useState(randomHexColor());
	const [rippleOverflow, setRippleOverflow] = useState(false);
	return (
		<View style={styles.container}>
			<TouchableNativeFeedback
				onPress={() => {
					setRippleColor(randomHexColor());
					setRippleOverflow(!rippleOverflow);
				}}
				background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
			>
				<View style={styles.touchable}>
					<Text style={styles.text}>TouchableNativeFeedback</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const randomHexColor = () => {
	return '#000000'.replace(/0/g, function () {
		return Math.round(Math.random() * 16).toString(16);
	});
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: StatusBar.currentHeight,
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
	touchable: { flex: 0.5, borderColor: 'black', borderWidth: 1 },
	text: { alignSelf: 'center' },
});

export default Playground;

// import React, { useRef, useState } from 'react';
// import {
// 	Button,
// 	DrawerLayoutAndroid,
// 	StyleSheet,
// 	Text,
// 	View,
// } from 'react-native';

// const Playground = () => {
// 	const drawer = useRef(null);
// 	const [drawerPosition, setDrawerPosition] = useState('left');
// 	const changeDrawerPosition = () => {
// 		if (drawerPosition === 'left') {
// 			setDrawerPosition('right');
// 		} else {
// 			setDrawerPosition('left');
// 		}
// 	};

// 	const navigationView = () => (
// 		<View style={[styles.container, styles.navigationContainer]}>
// 			<Text style={styles.paragraph}>I'm in the Drawer!</Text>
// 			<Button
// 				title="Close drawer"
// 				onPress={() => drawer.current.closeDrawer()}
// 			/>
// 		</View>
// 	);

// 	return (
// 		<DrawerLayoutAndroid
// 			ref={drawer}
// 			drawerWidth={300}
// 			drawerPosition={drawerPosition}
// 			renderNavigationView={navigationView}
// 		>
// 			<View style={styles.container}>
// 				<Text style={styles.paragraph}>Drawer on the {drawerPosition}!</Text>
// 				<Button
// 					title="Change Drawer Position"
// 					onPress={() => changeDrawerPosition()}
// 				/>
// 				<Text style={styles.paragraph}>
// 					Swipe from the side or press button below to see it!
// 				</Text>
// 				<Button
// 					title="Open drawer"
// 					onPress={() => drawer.current.openDrawer()}
// 				/>
// 			</View>
// 		</DrawerLayoutAndroid>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		padding: 16,
// 	},
// 	navigationContainer: {
// 		backgroundColor: '#ecf0f1',
// 	},
// 	paragraph: {
// 		padding: 16,
// 		fontSize: 15,
// 		textAlign: 'center',
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const Playground = () => {
// 	const [count, setCount] = useState(0);
// 	const onPress = () => setCount((prevCount) => prevCount + 1);

// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.countContainer}>
// 				<Text>Count: {count}</Text>
// 			</View>
// 			<TouchableOpacity style={styles.button} onPress={onPress}>
// 				<Text>Press Here</Text>
// 			</TouchableOpacity>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		paddingHorizontal: 10,
// 	},
// 	button: {
// 		alignItems: 'center',
// 		backgroundColor: '#DDDDDD',
// 		padding: 10,
// 	},
// 	countContainer: {
// 		alignItems: 'center',
// 		padding: 10,
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

// const Playground = () => {
// 	const [count, setCount] = useState(0);
// 	const onPress = () => setCount(count + 1);

// 	return (
// 		<View style={styles.container}>
// 			<TouchableHighlight onPress={onPress}>
// 				<View style={styles.button}>
// 					<Text>Touch Here</Text>
// 				</View>
// 			</TouchableHighlight>
// 			<View style={styles.countContainer}>
// 				<Text style={styles.countText}>{count || null}</Text>
// 			</View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		paddingHorizontal: 10,
// 	},
// 	button: {
// 		alignItems: 'center',
// 		backgroundColor: '#DDDDDD',
// 		padding: 10,
// 	},
// 	countContainer: {
// 		alignItems: 'center',
// 		padding: 10,
// 	},
// 	countText: {
// 		color: '#FF00FF',
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import { StyleSheet, Switch, View } from 'react-native';

// const Playground = () => {
// 	const [isEnabled, setIsEnabled] = useState(false);
// 	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

// 	return (
// 		<View style={styles.container}>
// 			<Switch
// 				trackColor={{ false: '#767577', true: '#81b0ff' }}
// 				thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
// 				ios_backgroundColor="#3e3e3e"
// 				onValueChange={toggleSwitch}
// 				value={isEnabled}
// 			/>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import {
// 	Button,
// 	Platform,
// 	SafeAreaView,
// 	StatusBar,
// 	StyleSheet,
// 	Text,
// 	View,
// } from 'react-native';

// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];

// const Playground = () => {
// 	const [hidden, setHidden] = useState(false);
// 	const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
// 	const [statusBarTransition, setStatusBarTransition] = useState(
// 		TRANSITIONS[0]
// 	);

// 	const changeStatusBarVisibility = () => setHidden(!hidden);

// 	const changeStatusBarStyle = () => {
// 		const styleId = STYLES.indexOf(statusBarStyle) + 1;
// 		if (styleId === STYLES.length) {
// 			setStatusBarStyle(STYLES[0]);
// 		} else {
// 			setStatusBarStyle(STYLES[styleId]);
// 		}
// 	};

// 	const changeStatusBarTransition = () => {
// 		const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
// 		if (transition === TRANSITIONS.length) {
// 			setStatusBarTransition(TRANSITIONS[0]);
// 		} else {
// 			setStatusBarTransition(TRANSITIONS[transition]);
// 		}
// 	};

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<StatusBar
// 				animated={true}
// 				backgroundColor="#61dafb"
// 				barStyle={statusBarStyle}
// 				showHideTransition={statusBarTransition}
// 				hidden={hidden}
// 			/>
// 			<Text style={styles.textStyle}>
// 				StatusBar Visibility:{'\n'}
// 				{hidden ? 'Hidden' : 'Visible'}
// 			</Text>
// 			<Text style={styles.textStyle}>
// 				StatusBar Style:{'\n'}
// 				{statusBarStyle}
// 			</Text>
// 			{Platform.OS === 'ios' ? (
// 				<Text style={styles.textStyle}>
// 					StatusBar Transition:{'\n'}
// 					{statusBarTransition}
// 				</Text>
// 			) : null}
// 			<View style={styles.buttonsContainer}>
// 				<Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
// 				<Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
// 				{Platform.OS === 'ios' ? (
// 					<Button
// 						title="Change StatusBar Transition"
// 						onPress={changeStatusBarTransition}
// 					/>
// 				) : null}
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		backgroundColor: '#ECF0F1',
// 	},
// 	buttonsContainer: {
// 		padding: 10,
// 	},
// 	textStyle: {
// 		textAlign: 'center',
// 		marginBottom: 8,
// 	},
// });

// export default Playground;

// import React from 'react';
// import {
// 	SafeAreaView,
// 	SectionList,
// 	StatusBar,
// 	StyleSheet,
// 	Text,
// 	View,
// } from 'react-native';

// const DATA = [
// 	{
// 		title: 'Main dishes',
// 		data: ['Pizza', 'Burger', 'Risotto'],
// 	},
// 	{
// 		title: 'Sides',
// 		data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
// 	},
// 	{
// 		title: 'Drinks',
// 		data: ['Water', 'Coke', 'Beer'],
// 	},
// 	{
// 		title: 'Desserts',
// 		data: ['Cheese Cake', 'Ice Cream'],
// 	},
// ];

// const Playground = () => (
// 	<SafeAreaView style={styles.container}>
// 		<SectionList
// 			sections={DATA}
// 			keyExtractor={(item, index) => item + index}
// 			renderItem={({ item }) => (
// 				<View style={styles.item}>
// 					<Text style={styles.title}>{item}</Text>
// 				</View>
// 			)}
// 			renderSectionHeader={({ section: { title } }) => (
// 				<Text style={styles.header}>{title}</Text>
// 			)}
// 		/>
// 	</SafeAreaView>
// );

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: StatusBar.currentHeight,
// 		marginHorizontal: 16,
// 	},
// 	item: {
// 		backgroundColor: '#f9c2ff',
// 		padding: 20,
// 		marginVertical: 8,
// 	},
// 	header: {
// 		fontSize: 32,
// 		backgroundColor: '#fff',
// 	},
// 	title: {
// 		fontSize: 24,
// 	},
// });

// export default Playground;

// import React from 'react';
// import {
// 	SafeAreaView,
// 	ScrollView,
// 	StatusBar,
// 	StyleSheet,
// 	Text,
// } from 'react-native';

// const Playground = () => {
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<ScrollView style={styles.scrollView}>
// 				<Text style={styles.text}>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
// 					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// 					aliquip ex ea commodo consequat. Duis aute irure dolor in
// 					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
// 					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
// 					culpa qui officia deserunt mollit anim id est laborum.
// 				</Text>
// 			</ScrollView>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		paddingTop: StatusBar.currentHeight,
// 	},
// 	scrollView: {
// 		backgroundColor: 'pink',
// 		marginHorizontal: 20,
// 	},
// 	text: {
// 		fontSize: 42,
// 	},
// });

// export default Playground;

// import React from 'react';
// import {
// 	RefreshControl,
// 	SafeAreaView,
// 	ScrollView,
// 	StyleSheet,
// 	Text,
// } from 'react-native';

// const Playground = () => {
// 	const [refreshing, setRefreshing] = React.useState(false);

// 	const onRefresh = React.useCallback(() => {
// 		setRefreshing(true);
// 		setTimeout(() => {
// 			setRefreshing(false);
// 		}, 2000);
// 	}, []);

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<ScrollView
// 				contentContainerStyle={styles.scrollView}
// 				refreshControl={
// 					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
// 				}
// 			>
// 				<Text>Pull down to see RefreshControl indicator</Text>
// 			</ScrollView>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	scrollView: {
// 		flex: 1,
// 		backgroundColor: 'pink',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

// const Playground = () => {
// 	const [modalVisible, setModalVisible] = useState(false);
// 	return (
// 		<View style={styles.centeredView}>
// 			<Modal
// 				animationType="slide"
// 				transparent={true}
// 				visible={modalVisible}
// 				onRequestClose={() => {
// 					Alert.alert('Modal has been closed.');
// 					setModalVisible(!modalVisible);
// 				}}
// 			>
// 				<View style={styles.centeredView}>
// 					<View style={styles.modalView}>
// 						<Text style={styles.modalText}>Hello World!</Text>
// 						<Pressable
// 							style={[styles.button, styles.buttonClose]}
// 							onPress={() => setModalVisible(!modalVisible)}
// 						>
// 							<Text style={styles.textStyle}>Hide Modal</Text>
// 						</Pressable>
// 					</View>
// 				</View>
// 			</Modal>
// 			<Pressable
// 				style={[styles.button, styles.buttonOpen]}
// 				onPress={() => setModalVisible(true)}
// 			>
// 				<Text style={styles.textStyle}>Show Modal</Text>
// 			</Pressable>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	centeredView: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginTop: 22,
// 	},
// 	modalView: {
// 		margin: 20,
// 		backgroundColor: 'white',
// 		borderRadius: 20,
// 		padding: 35,
// 		alignItems: 'center',
// 		shadowColor: '#000',
// 		shadowOffset: {
// 			width: 0,
// 			height: 2,
// 		},
// 		shadowOpacity: 0.25,
// 		shadowRadius: 4,
// 		elevation: 5,
// 	},
// 	button: {
// 		borderRadius: 20,
// 		padding: 10,
// 		elevation: 2,
// 	},
// 	buttonOpen: {
// 		backgroundColor: '#F194FF',
// 	},
// 	buttonClose: {
// 		backgroundColor: '#2196F3',
// 	},
// 	textStyle: {
// 		color: 'white',
// 		fontWeight: 'bold',
// 		textAlign: 'center',
// 	},
// 	modalText: {
// 		marginBottom: 15,
// 		textAlign: 'center',
// 	},
// });

// export default Playground;

// import React from 'react';
// import {
// 	Button,
// 	Keyboard,
// 	KeyboardAvoidingView,
// 	Platform,
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	TouchableWithoutFeedback,
// 	View,
// } from 'react-native';

// const Playground = () => {
// 	return (
// 		<KeyboardAvoidingView
// 			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// 			style={styles.container}
// 		>
// 			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
// 				<View style={styles.inner}>
// 					<Text style={styles.header}>Header</Text>
// 					<TextInput placeholder="Username" style={styles.textInput} />
// 					<View style={styles.btnContainer}>
// 						<Button title="Submit" onPress={() => null} />
// 					</View>
// 				</View>
// 			</TouchableWithoutFeedback>
// 		</KeyboardAvoidingView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	inner: {
// 		padding: 24,
// 		flex: 1,
// 		justifyContent: 'space-around',
// 	},
// 	header: {
// 		fontSize: 36,
// 		marginBottom: 48,
// 	},
// 	textInput: {
// 		height: 40,
// 		borderColor: '#000000',
// 		borderBottomWidth: 1,
// 		marginBottom: 36,
// 	},
// 	btnContainer: {
// 		backgroundColor: 'white',
// 		marginTop: 12,
// 	},
// });

// export default Playground;

// import React, { useState } from 'react';
// import {
// 	FlatList,
// 	Image,
// 	ImageBackground,
// 	SafeAreaView,
// 	StatusBar,
// 	StyleSheet,
// 	Text,
// 	TouchableOpacity,
// } from 'react-native';

// const DATA = [
// 	{
// 		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
// 		title: 'First Item',
// 	},
// 	{
// 		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
// 		title: 'Second Item',
// 	},
// 	{
// 		id: '58694a0f-3da1-471f-bd96-145571e29d72',
// 		title: 'Third Item',
// 	},
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
// 	<TouchableOpacity
// 		onPress={onPress}
// 		style={[styles.item, { backgroundColor }]}
// 	>
// 		<Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
// 	</TouchableOpacity>
// );

// const Playground = () => {
// 	const [selectedId, setSelectedId] = useState();

// 	const renderItem = ({ item }) => {
// 		const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
// 		const color = item.id === selectedId ? 'white' : 'black';

// 		return (
// 			<Item
// 				item={item}
// 				onPress={() => setSelectedId(item.id)}
// 				backgroundColor={backgroundColor}
// 				textColor={color}
// 			/>
// 		);
// 	};

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<ImageBackground
// 				source={{
// 					uri: 'https://reactjs.org/logo-og.png',
// 				}}
// 				resizeMode={'cover'}
// 				style={styles.image}
// 			>
// 				<FlatList
// 					data={DATA}
// 					renderItem={renderItem}
// 					keyExtractor={(item) => item.id}
// 					extraData={selectedId}
// 				/>
// 				<Image
// 					style={styles.tinyLogo}
// 					source={{
// 						uri: 'https://reactnative.dev/img/tiny_logo.png',
// 					}}
// 				/>
// 			</ImageBackground>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 32,
// 	},
// 	tinyLogo: {
// 		width: 50,
// 		height: 50,
// 	},
// 	image: {
// 		flex: 1,
// 		justifyContent: 'center',
// 	},
// });

// export default Playground;

// import React from 'react';
// import {
// 	FlatList,
// 	SafeAreaView,
// 	StatusBar,
// 	StyleSheet,
// 	Text,
// 	View,
// } from 'react-native';

// const DATA = [
// 	{
// 		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
// 		title: 'First Item',
// 	},
// 	{
// 		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
// 		title: 'Second Item',
// 	},
// 	{
// 		id: '58694a0f-3da1-471f-bd96-145571e29d72',
// 		title: 'Third Item',
// 	},
// ];

// const Item = ({ title }) => (
// 	<View style={styles.item}>
// 		<Text style={styles.title}>{title}</Text>
// 	</View>
// );

// const Playground = () => {
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<FlatList
// 				data={DATA}
// 				renderItem={({ item }) => <Item title={item.title} />}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		backgroundColor: '#f9c2ff',
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 32,
// 	},
// });

// export default Playground;

// import {
// 	Alert,
// 	Button,
// 	SafeAreaView,
// 	StyleSheet,
// 	Text,
// 	View,
// } from 'react-native';

// const Separator = () => <View style={styles.separator} />;

// export default function Playground() {
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<View>
// 				<Text style={styles.title}>
// 					The title and onPress handler are required. It is recommended to set
// 					accessibilityLabel to help make your app usable by everyone.
// 				</Text>
// 				<Button
// 					title="Press Me"
// 					onPress={() => Alert.alert('Simple button pressed')}
// 				/>
// 			</View>
// 			<Separator />
// 			<View>
// 				<Text style={styles.title}>
// 					Adjust the color in a way that looks standard on each platform. On
// 					iOS, the color prop controls the color of the text. On Android, the
// 					color adjusts the background color of the button.
// 				</Text>
// 				<Button
// 					title="Press me"
// 					color="#f194ff"
// 					onPress={() => Alert.alert('Button with adjusted color pressed')}
// 				/>
// 			</View>
// 			<Separator />
// 			<View>
// 				<Text style={styles.title}>
// 					All interaction for the component are disabled.
// 				</Text>
// 				<Button
// 					title="Press me"
// 					disabled
// 					onPress={() => Alert.alert('Cannot press this one')}
// 				/>
// 			</View>
// 			<Separator />
// 			<View>
// 				<Text style={styles.title}>
// 					This layout strategy lets the title define the width of the button.
// 				</Text>
// 				<View style={styles.fixToText}>
// 					<Button
// 						title="Left button"
// 						onPress={() => Alert.alert('Left button pressed')}
// 					/>
// 					<Button
// 						title="Right button"
// 						onPress={() => Alert.alert('Right button pressed')}
// 					/>
// 				</View>
// 			</View>
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		textAlign: 'center',
// 		marginVertical: 8,
// 	},
// 	fixToText: {
// 		flexDirection: 'row',
// 		justifyContent: 'space-between',
// 	},
// 	separator: {
// 		marginVertical: 8,
// 		borderBottomColor: '#737373',
// 		borderBottomWidth: StyleSheet.hairlineWidth,
// 	},
// });

// import { ActivityIndicator, StyleSheet, View } from 'react-native';

// export default function Playground() {
// 	return (
// 		<View style={[styles.container, styles.horizontal]}>
// 			<ActivityIndicator />
// 			<ActivityIndicator size={'large'} />
// 			<ActivityIndicator size={'small'} color={'#0000ff'} />
// 			<ActivityIndicator size={'large'} color={'#00ff00'} />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 	},
// 	horizontal: {
// 		flexDirection: 'row',
// 		justifyContent: 'space-around',
// 		padding: 10,
// 	},
// });
