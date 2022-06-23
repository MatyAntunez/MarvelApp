import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Information from './Information';
import Comics from './Comics';
import apiParams from '../config.js';
import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;



  useEffect(() => {
    axios.get(`${baseURL}/v1/public/characters/${route.params.id}`, {
      params: {
        ts,
        apikey,
        hash
      }
    })
      .then(response => {console.log('ACA ME ROMPO'+ JSON.stringify(response.data.data.results));
      setData(response.data.data.results)})
      .catch(error => {console.error(error.message);
      console.log(`ACA ME ROMPO LOS DICEN ${baseURL}/v1/public/characters/${route.params.id}` );})
      .finally(() => setLoading(false));
  }, []);

  
 

  return (
    <Tab.Navigator
      initialRouteName="Information"
      screenOptions={{
        activeTintColor: 'darkred'
      }}
    >
      <Tab.Screen 
        name="Information" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-circle" color={color} size={size} />
          )
        }}
      >
        {() => 
          (isLoading
            ? <ActivityIndicator size="large" color="#00ff00" /> 
            : <Information 

                 image={`${data[0]?.thumbnail?.path}.${data[0].thumbnail.extension}`}
                 name={data[0].name}
                 description={data[0].description} 
              />
          )
        }
      </Tab.Screen>
      <Tab.Screen 
        name="Comics" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          )
        }}
      >
        {() => 
          (isLoading
            ? <ActivityIndicator size="large" color="#00ff00" /> 
            : <Comics
                listComics={data} 
              />
          )
        }
      </Tab.Screen>


    </Tab.Navigator>
  );
}