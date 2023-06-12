import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Lives() {
  return (
    <View>
      <Text style={styles.color}>Live Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  color: {
    color: 'white'
  }
})

export default Lives;
