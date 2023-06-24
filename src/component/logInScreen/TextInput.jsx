import React, {useContext} from 'react';
import Context from '../../context/Context';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function InputText({title, placeholder, type}) {
  const { colors: {text} } = useTheme(); 
  const { login, setLogin } = useContext(Context);

  const handleChange = (value) => {
    setLogin(prev => ({ 
      ...prev,
      [type.toLowerCase()]: value
    }))
  }

  return (
      <View>
          <Text style={[styles.title, { color: text }]}>{title}</Text>
          <TextInput
            value={login[type]}
            onChangeText={handleChange}
            placeholder={placeholder}
            style={styles.input}
            placeholderTextColor='black'
          />
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 14,
    fontWeight: 600
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10
  }
});
