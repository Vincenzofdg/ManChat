import React, {useContext} from 'react';
import Context from '../context/Context'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import localized from '../localized/SignUp'
import Btn from '../component/SingUp/SignInBtn'
import Picture from '../../assets/background.jpg'
import { userObj } from '../localized/Roles'

function SignUp() {
  const { navigate } = useNavigation();
  const { info, setUser } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  const handleNewUser = () => {
    setUser(userObj)
    navigate('Profile')
  }
  return (
    <View style={styles.page}>
      <View style={styles.up}>
        <Text style={styles.text}>{str.app_name}</Text>
        <Text style={{color: 'white', fontStyle: 'italic'}}>{str.slogan}</Text>
      </View>
      <View style={styles.down}>
      <ImageBackground resizeMode='stretch' source={Picture} style={styles.img}>
          <Btn title={str.signIn} />
          <Btn title={str.newUser} press={handleNewUser} />
      </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#062f81',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  up: {
    marginBottom: 50,
  },
  down: {
    backgroundColor: '#02183C',
    height: '45%',
    width: '80%',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 700,
    fontSize: 25,
    alignSelf: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SignUp;
