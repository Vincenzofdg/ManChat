import React, {useContext} from 'react';
import Context from '../context/Context'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import localized from '../localized/SignUp'
import Btn from '../component/SignInBtn'

function SignUp() {
  const { navigate } = useNavigation();
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  const handleGoogle = () => navigate('Profile')
  const handleForm = () => navigate('Profile')
  return (
    <View style={styles.page}>
      <View style={styles.up}>
        <Text style={styles.text}>{str.app_name}</Text>
        <Text style={styles.text}>{str.slogan}</Text>
      </View>
      <View style={styles.down}>
        <Btn title={str.google} press={ handleGoogle } />
        <Btn title={str.form} press={handleForm} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  up: {
    marginBottom: 50,
  },
  down: {
    height: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 700,
    fontSize: 25,
    alignSelf: 'center',
  },
})

export default SignUp;
