import React, {useContext} from 'react';
import Context from '../../../context/Context';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import localized from '../../../localized/SignUp';
import Logo from '../../../../assets/facebook.png';

export default function Facebook() {
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  return (
    <TouchableOpacity style={styles.btn}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}>{str.facebook}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgb(56,91,167)',
    width: 280,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    color: 'white',
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
