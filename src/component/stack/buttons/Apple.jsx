import React, {useContext} from 'react';
import Context from '../../../context/Context';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import localized from '../../../localized/SignUp';
import Imgs from '../../../localized/Images';

import { user } from '../../../mock';

export default function Apple() {
  const { info, setUser } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  const { navigate } = useNavigation();

  const mocking = () => {
    setUser(user)
    navigate('HomePage')
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={mocking}>
      <Image source={Imgs.apple} style={styles.logo} />
      <Text style={styles.text}>{str.apple}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'black',
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
