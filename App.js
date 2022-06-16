import "react-native-gesture-handler";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../MarvelApp/Components/HomeScreen";
import Detail from "../MarvelApp/Components/Detail";
import Information from "./Components/Information";
import Comics from "./Components/Comics";

const  Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Information" component={Information} />
          <Stack.Screen name="Comics" component={Comics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

