import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function News() {
  return (
    <View>
      <Text style={styles.color}>News Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  color: {
    color: 'white'
  }
})

export default News;
