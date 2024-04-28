import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HighLightCard({data: {content}}) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'green',
    width: width - 40,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    
    alignItems: 'center',
    justifyContent: 'center'
  }
});
