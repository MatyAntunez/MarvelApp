import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Comic from './Comic';
import apiParams from '../config.js';
import axios from 'axios';

export default function Comics({ listComics }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { ts, apikey, hash, baseURL } = apiParams;

  //console.log('ACA LLEGUE PUTOS',listComics)

  useEffect(() => {
    const promisesArray = listComics.map(e => e.comics.items.map(c => {
     return axios.get(c.resourceURI, {
        params: {
          ts,
          apikey,
          hash
        }      
      })
  }));

 // console.log(promisesArray)

  // promisesArray[0][0].then((e) => console.log(e.data) ).catch(error => console.error(error))
    
    Promise.all(promisesArray[0])
      .then(responses => setData(responses.map(r => (
        r?.data?.data?.results[0]
      ))))
      .then(response => console.log(response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false)  )
     // console.log('llamil el mas comilon',data)
      

  }, []);



  return (
    <View>
      {
        isLoading 
          ? <ActivityIndicator size="large" color="#00ff00" /> 
          : data.map(c => (
            <Comic 
              key={c.id}
              name={c.title} 
              image={`${c?.thumbnail?.path}.${c.thumbnail.extension}`}  
            />
          ))
      }
    </View>
  )
}