import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';


import { user, newUser } from '../../mock';


export default function Buttom({title, type}) {
  const {navigate} = useNavigation();
  const { login, setUser } = useContext(Context);
  const { colors: {text} } = useTheme(); 

  const handlePress = () => {
    if (type === 'newUser') {
      setUser(newUser)
      navigate('Info')
    }
    if (type === 'login') {
      // const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      // const isEmailValid = emailRegex.test(login.email);
      // const isPasswordValid = login.password.length >= 8;

      // if (isEmailValid, isPasswordValid) navigate('HomePage');
      setUser(user)
      navigate('HomePage')
    }
  }


  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttom}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 600
  }
});
