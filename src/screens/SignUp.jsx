import React, {useContext} from 'react';
import Context from '../context/Context'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import localized from '../localized/SignUp';
import Picture from '../assets/background.jpg';

import Btn from '../component/stack/buttons'

function SignUp() {
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  return (
    <View style={styles.page}>
      <ImageBackground resizeMode='cover' source={Picture} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.text}>{str.app_name}</Text>
          <Text style={styles.subText}>{str.slogan}</Text>
        </View>
        <View style={styles.down}>
            <Btn.Apple />
            <Btn.Facebook />
            <Btn.Google />
            <Btn.NewUser />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.6,
    zIndex: 0,
  },
  container: {
    height: '100%',
    zIndex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  up: {
    marginBottom: 50,
  },
  down: {
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: '#0c0c0c',
    fontWeight: 900,
    fontSize: 28,
    alignSelf: 'center',
  },
  subText: {
    color: '#0c0c0c',
    fontSize: 16,
    fontStyle: 'italic',
  },
})

export default SignUp;
