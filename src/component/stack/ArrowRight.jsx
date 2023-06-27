import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Imgs from '../../localized/Images';

function ArrowRight({action, isOn}) {
  return (
    <TouchableOpacity style={styles.next} onPress={action} disabled={!isOn}>
      <Image source={Imgs.arrow} style={styles.arrow} resizeMode="contain" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  next: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 30,
    marginRight: 35,
    transform: [{ rotate: '270deg' }],
  },
  arrow: {
    width: 40, 
    height: 40,
  }
})

export default ArrowRight;
