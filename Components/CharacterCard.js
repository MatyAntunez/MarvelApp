import React, {useEffect}from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity  } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function CharacterCard({image, name, id}) {
    const navigation = useNavigation();

    // useEffect(() => {
    //   console.log(image)
    //   }, []);

    return(
        <TouchableOpacity  
            style={styles.container} 
            onPress={() => navigation.navigate('Detail', {name: "Detail", id:id})}
            >
            <Image 
                style={styles.image} 
                // source= {image} 
                source={{
                    uri: (image),
                  }}
            />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity >
    )
};

const styles = StyleSheet.create({
    container: {
          flexDirection: 'row', 
          alignItems: 'center', 
          marginLeft: 20,
          marginRight: 20,
          marginTop: 5,
          borderWidth: 2,
          padding: 10,
          borderColor: 'darkred',
          borderRadius: 10,
          backgroundColor: 'rgb(223, 184, 184)'
    },
      image: {
          width: 30,
          height: 30,
          marginRight: 10,
         
      },
      name: {
          fontWeight: 'bold'
      }
  });   