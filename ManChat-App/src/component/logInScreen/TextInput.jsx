import React, {useContext, useRef} from 'react';
import Context from '../../context/Context';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

import HandleScroll from '../../Hooks/HandleScroll';

export default function InputText({title, placeholder, type, baseRef}) {
  const { login, setLogin } = useContext(Context);

  const inputRef = useRef();

  const isIOS = Platform.OS === 'ios' && {height: 50}
  const valid = !login.status && {borderColor: 'red', borderWidth: 1.5}

  const handleChange = (value) => {
    setLogin(prev => ({ 
      ...prev,
      status: true,
      [type.toLowerCase()]: value
    }))
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onFocus={() => HandleScroll(inputRef, baseRef, 100)}
        value={login[type]}
        onChangeText={handleChange}
        placeholder={placeholder}
        style={[styles.input, isIOS, valid]}
        placeholderTextColor='black'
        secureTextEntry={type === 'password' && true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: '700',
    color: 'white'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    color: 'black',
  }
});
