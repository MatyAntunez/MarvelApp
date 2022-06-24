import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
    return (
      <View    style= {styles.container}>
              <Image
                   style= {styles.image}
                  º source={{uri: image}}
              />
              <Text style={styles.titulo}>{name}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      justifyContent: 'space-between',
      marginLeft: 30 
    },
    titulo:{
      justifyContent: 'center'
    },
    container: {
      justifyContent: "center"
    }
  })



