import React, {useContext} from 'react';
import Context from '../context/Context'
import { 
  StyleSheet, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  Dimensions, 
  Text, 
  TouchableOpacity,
  SafeAreaView,
  Platform } from 'react-native'

import Imgs from '../localized/Images'
import localized from '../localized/SignUp';
import InputText from '../component/logInScreen/TextInput';
import Buttom from '../component/logInScreen/Buttom';

const { width, height } = Dimensions.get('window');

function SignUp() {
  const { info } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  return (
    <SafeAreaView style={styles.page}>
      <Image source={Imgs.logo} style={styles.logo} />
      <KeyboardAvoidingView behavior='padding' style={styles.login}>
        <InputText type={'email'} title={str.email} placeholder={str.emailPlaceholder}/>
        <InputText type={'password'} title={str.password} placeholder={str.passwordPlaceholder}/>
      </KeyboardAvoidingView>
      <View style={styles.submit}>
        <Buttom type={'login'} title={str.login}/>
        <TouchableOpacity style={{margin: 10}}>
          <Text style={styles.resetPassword}>{str.passwordForgot}</Text>
        </TouchableOpacity>
        <Buttom type={'newUser'} title={str.signUp}/>
      </View>
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
