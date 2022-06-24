import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Comic({ name, image }) {
    return (
      <View style= {styles.father}>
        <View style= {styles.container}>
              <Image
                   style= {styles.image}
                   source={{uri: image}}
              />
              <Text style={styles.font}>{name}</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    father: {
      alignItems: "center",
      justifyContent: "center"
    },
    container: {
      width: 260,
      backgroundColor: 'rgba(213, 14, 14, 0.4)',
      borderWidth: 2,
      borderColor: 'darkred',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      marginTop: 45,
      marginBottom: 45
    },
    image: {
      marginTop: 30,
      width: 230,
      height: 340
    },
    font: {
      padding: 10,
      fontWeight: 'bold',
      marginBottom: 10
    }
  });
  



