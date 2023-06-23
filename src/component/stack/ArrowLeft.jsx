import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

import Arrow from '../../assets/arrow.png'

function ArrowLeft({action, text}) {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Image source={Arrow} style={styles.arrow} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 50,    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  arrow: {
    width: 20, 
    height: 20,
    transform: [{ rotate: '90deg' }],
  },
  text: {
    color: 'white'
  }
})

export default ArrowLeft;
