import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Apple({ title, press }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={press}>
      <Text style={styles.text}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: '#364156',
    backgroundColor: 'black',
    opacity: 0.7,
    width: 300,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    // marginBottom: 0,
    marginTop: 15,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
