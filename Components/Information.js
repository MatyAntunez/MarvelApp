import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function Information({ image, name, description }) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text >{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 20,
        height: 30,
    }
  });