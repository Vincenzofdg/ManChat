import React, {useRef} from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  Dimensions, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Platform } from 'react-native'

import Imgs from '../localized/Images'
import str from '../localized/Strings';
import InputText from '../component/logInScreen/TextInput';
import Buttom from '../component/logInScreen/Buttom';

const { width, height } = Dimensions.get('window');

function SignUp() {
  const menuRef = useRef(null);

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>
      <Image source={Imgs.logo} style={styles.logo} />
      <View behavior='padding' style={styles.login}>
        <InputText baseRef={menuRef} type={'email'} title={str.login.email[0]} placeholder={str.login.email[1]}/>
        <InputText baseRef={menuRef} type={'password'} title={str.login.password[0]} placeholder={str.login.password[1]}/>
      </View>
      <View style={styles.submit}>
        <Buttom type={'login'} title={str.login.login}/>
        <TouchableOpacity style={{margin: 10}}>
          <Text style={styles.resetPassword}>{str.login.passwordForgot}</Text>
        </TouchableOpacity>
        <Buttom type={'newUser'} title={str.login.signUp}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios'? 40 : 50
  },
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  login: {
    width: width - 100,
    height: height / 3.3,
    justifyContent: 'space-around'
  },
  submit: {
    width: width - 100,
    height: height / 3,
  },
  resetPassword: {
    color: 'white',
    alignSelf: 'flex-end',
  }
})

export default SignUp;
