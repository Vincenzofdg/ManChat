import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

function Card({info}) {
  const { navigate } = useNavigation();

  const handlePress = () => navigate('Post', info);
  
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.text}>{info.content}</Text>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>{info.tag}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5FEFD', 
    width: width - 70,
    minHeight: 100,
    borderRadius: 20,
    marginBottom: 15,
    padding: 10,
    justifyContent: 'space-between'
  },
  title: {
    color: '#011028',
    fontSize: 14,
    fontWeight: 600
  },
  text: {
    color: '#011028',
    fontSize: 12,
    flexGrow: 1,
  },
  tagContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  tag: {
    minWidth: 50,
    textAlign: 'center',
    borderColor: 'black',
    color: '#011028',
    borderWidth: 1,
    borderRadius: 10
  }
})

export default Card;
