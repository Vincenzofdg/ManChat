import React from 'react';
import { View, TextInput, StyleSheet, Platform, Image } from 'react-native';

import str from '../../localized/Strings';
import images from '../../localized/Images';

export default function InputText({content, mainRef, action, check: {enter, status}}) {
  const {c: {name, type}, i: indice} = content;
  const isIOS = Platform.OS === 'ios' && {height: 50};
  const valid = enter && (!status[name] && {borderColor: 'red', borderWidth: 1.5});

  const handleChange = (text) => {
    action(prev => ({
      ...prev,
      [name]: text
    }))
  }

  return (
    <View style={[styles.container, indice === 2 && {flexGrow: 1}]}>
      {
        indice !== 2 && (
          <View style={styles.icon}>
            <Image source={images.newUser[indice]} style={{width: '100%', height: '100%'}}/>
          </View>
        )
      }
      <TextInput
        ref={mainRef}
        placeholder={name !== 'email' ? name : str.newUser.email}
        style={[styles.input, isIOS, valid]}
        placeholderTextColor='black'
        keyboardType={type}
        onChangeText={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 40
  },
  icon: {
    width: 50,
    height: 50,
    padding: 7,
    marginRight: 10,
  },
  title: {
    marginBottom: 15,
    fontSize: 14,
    fontWeight: 600,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: 'black',
    flexGrow: 1
  }
});
