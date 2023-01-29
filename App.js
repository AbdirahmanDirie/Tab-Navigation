import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Movies from './screens/Movie';
const Tab = createBottomTabNavigator();

// function HomeScreen (){
//   return (
//     <View>
//       <Text>Home Screen</Text>
//     </View>
//   )
// }

// function MoviesScreen (){
//   return (
//     <View>
//       <Text>Movies Screen</Text>
//     </View>
//   )
// }

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Movies' component={Movies} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
