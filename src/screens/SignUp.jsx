import React, {useContext} from 'react';
import Context from '../context/Context'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import localized from '../localized/SignUp'
import Btn from '../component/SingUp/SignInBtn'
import Picture from '../../assets/background.jpg'
import { userObj, mockedUser } from '../localized/Roles'

function SignUp() {
  const { navigate } = useNavigation();
  const { info, setUser } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  const handleNewUser = () => {
    setUser(userObj)
    navigate('Profile')
  }

  const mocking = () => {
    setUser(mockedUser)
    navigate('Tags')
  }
  return (
    <View style={styles.page}>
      <ImageBackground resizeMode='cover' source={Picture} style={styles.img} />
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.text}>{str.app_name}</Text>
          <Text style={styles.subText}>{str.slogan}</Text>
        </View>
        <View style={styles.down}>
            <Btn title={str.signIn} press={mocking} />
            <Btn title={str.newUser} press={handleNewUser} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {
    marginBottom: 50,
  },
  down: {
    height: '45%',
    width: '80%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
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
