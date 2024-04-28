import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Imgs from '../../localized/Images';

export default function StatusBtn({text, type}) {
  const qtd = 0;

  const img = type === 'message' ? Imgs.message : Imgs.reply

  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={img} style={styles.icon}/>
      <View style={styles.textContainer}>
        <Text style={[styles.text, {marginRight: 5}]}>{qtd}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});
