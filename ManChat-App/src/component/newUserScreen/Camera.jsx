import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import str from '../../localized/Strings';
import images from '../../localized/Images';

const Camera = ({action}) => {
  const save = (res) => {
    const conditionsToSave = !res.didCancel && !res.error && !res.errorCode;
    const cameraError = !res.errorCode;
    (conditionsToSave && cameraError) && action(
      prev => (
        {
          ...prev, 
          picture: res.assets[0].uri
        }
      )
    );
  }

  // {
  //   mediaType: 'photo',
  //   quality: 0.5,
  //   maxWidth: 500,
  //   maxHeight: 500,
  // },

  const choose = () => launchImageLibrary({ mediaType: 'photo' }, (response) => save(response));
  const take = () => launchCamera({ mediaType: 'photo' }, (response) => save(response));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.take} onPress={take}>
        <Image source={images.camera} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.select} onPress={choose}>
        <Text style={styles.text}>{str.newUser.picture}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
  },
  select: {
    backgroundColor: 'rgb(71,85,113)',
    flexGrow: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 20
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600'
  }
})

export default Camera;
