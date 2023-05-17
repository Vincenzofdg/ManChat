import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SignUp({ title, press }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={press}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'gray',
    width: 160,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
