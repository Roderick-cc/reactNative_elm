// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <View >
//           <Text>
//             13
//           </Text>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
// });

// export default App;

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;

const Tab = createBottomTabNavigator();
// function HomeScreen({ navigation }) {
//   const [count, setCount] = React.useState(0);

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerRight: () => (
//         <Button onPress={() => setCount(c => c + 1)} title="Update count" />
//       ),
//     });
//   }, [navigation, setCount]);

//   return <Text>Count: {count}</Text>;
// }


// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// function HomeScreen({ navigation }) {

//   const [postText, setPostText] = React.useState('');

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Go to Details"
//         onPress={() => {
//           /* 1. Navigate to the Details route with params */
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'anything you want here',
//           });
//         }}
//       />


//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass params back to home screen
//           navigation.navigate('Details', { post: postText });
//         }}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ route, navigation }) {
//   const { post } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="22222"
//         onPress={() => navigation.navigate('Details333')}
//       />

//       <Text>itemId: {JSON.stringify(post)}</Text>

//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//     </View>
//   );
// }


// function LogoTitle() {
//   return (
//     <>
//       <Text>12333333</Text>
//     </>
//   )
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>

//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             headerTitle: props => <LogoTitle {...props} />,
//             headerRight: () => (
//               <Button
//                 onPress={() => alert('This is a button!')}
//                 title="Info"
//                 color="#fff"
//               />
//             ),
//             headerLeft: () => (
//               <Button
//                 onPress={() => alert('This is a button!')}
//                 title="Info"
//                 color="#fff"
//               />
//             ),
//           }}
//         />

//         <Stack.Screen name="Details" component={DetailsScreen} />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

