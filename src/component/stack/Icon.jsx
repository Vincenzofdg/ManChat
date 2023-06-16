import React, {useContext} from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import Context from '../../context/Context';

import localized from '../../localized/SignUp'
import CameraIcon from '../../assets/camera.png'
import FolderIcon from '../../assets/folder.png'

export default function SignUp({type, press}) {
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];
  const img = type === 'camera' ? CameraIcon : FolderIcon;
  return (
    <TouchableOpacity style={styles.container} onPress={press}>
      <Image source={img} style={styles.picutre} />
      <Text style={styles.text}>{str[type]}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  picutre: {
    width: 70,
    height: 70,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 400,
    fontSize: 12,
  }
});
