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
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    }
  });