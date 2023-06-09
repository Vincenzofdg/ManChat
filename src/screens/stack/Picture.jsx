import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import Context from '../../context/Context';
import Icon from '../../component/stack/Icon'
import { iconTakePicture as imgs } from '../../localized/Roles';

function Picture() {
  const { setUser } = useContext(Context)
  const { navigate } = useNavigation();

  const savePicture = (res) => {
    const conditionsToSave = !res.didCancel && !res.error && !res.errorCode;
    const cameraError = !res.errorCode;

    !cameraError && console.log('No Camera Founded')

    if (conditionsToSave && cameraError) {
      setUser((prev) => ({
        ...prev,
        photo: res.assets[0].uri
      }));
      navigate('Tags')
    }
  }
  const handlePictureChose = () => {
    launchImageLibrary(
      { 
        mediaType: 'photo'
      }, 
      (response) => savePicture(response));
  };

  const handleTakePicture = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.5,
        maxWidth: 500,
        maxHeight: 500,
      },
      (response) => savePicture(response)
    );
  };


  return (
    <View style={styles.container}>
      {
        imgs.map(icon => 
          <Icon 
            key={icon + '-key'}
            type={icon} 
            press={icon === 'folder' ? handlePictureChose : handleTakePicture}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})

export default Picture;
