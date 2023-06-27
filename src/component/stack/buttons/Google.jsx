import React, {useContext} from 'react';
import Context from '../../../context/Context';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import localized from '../../../localized/SignUp';
import Imgs from '../../../localized/Images';

export default function Google() {
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={Imgs.google} style={styles.logo} />
      <Text style={styles.text}>{str.google}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    width: 280,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontWeight: 600,
    flexGrow: 1,
    textAlign: 'center'
  },
  logo: {
    width: 15,
    height: 15,
  }
});
