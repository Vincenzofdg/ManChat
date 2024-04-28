import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { newUser } from '../../mock';

// import users from '../../db';
import { getAllUsers } from "../../services/getRequest";

export default function Buttom({title, type}) {
  const {navigate} = useNavigation();
  const { login, setLogin, setUser, user } = useContext(Context);

  const handlePress = async () => {
    if (type === 'newUser') {
      // setUser(newUser)
      navigate('NewUser')
    }
    
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isEmailValid = emailRegex.test(login.email);
    const isPasswordValid = login.password.length >= 8;

    if (!isEmailValid | !isPasswordValid) {
      setLogin(prev => ({...prev, status: false}))
      return
    };

    const users = await getAllUsers()

    // const foundedUser = users.find(({email, password}) => email === login.email && password === login.password);
    const foundedUser = users.find(({email}) => email === login.email);

    if (!!foundedUser) {
      setUser(foundedUser)

      navigate('HomePage')
      return
    }
    setLogin(prev => ({...prev, status: false}))
    
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
