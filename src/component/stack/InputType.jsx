import React, {useContext} from 'react';
import Context from '../../context/Context';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { minLenght, maxLength } from '../../localized/Roles'

export default function InputType(props) {
  const {label, type, isVisible, next, reference, i} = props
  const { user, setUser } = useContext(Context)
  const willDisplay = !!isVisible ? 'flex' : 'none'
  
  const handleChange = (text) => {
    const lines = text.split('\n');
    if (lines.length <= 5) {
      setUser((prev) => ({ 
        ...prev, 
        [`${type}`]: text 
      }))
      text.length >= minLenght[type] ? next(true) : next(false)
    }
  }

  return (
    <View style={[styles.container, {display: willDisplay}]}>
        <Text style={[styles.text, {fontWeight: 500}]}>
          {label}
        </Text>
        <TextInput 
          style={[styles.text, {textAlign: 'center'}]}
          value={user[type]}
          maxLength={maxLength[type]}
          keyboardType={type === 'age' ? 'numeric' : 'default'}
          multiline={type === 'bio' && true}
          numberOfLines={type === 'bio' ? 6 : 1}
          onChangeText={handleChange}
          ref={ref => reference.current[i] = ref}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    opacity: 0.6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: 16,
  },
});
