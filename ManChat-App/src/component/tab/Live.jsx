import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

function Live({info}) {
  const { navigate } = useNavigation();

  const handlePress = () => navigate('Live', info);
  
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{info.title}</Text>
      <TouchableOpacity style={styles.link} onPress={handlePress}>
        <Text style={styles.text}>Link</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'gray', 
    width: width - 70,
    minHeight: 65,
    borderRadius: 20,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden'
  },
  title: {
    marginLeft: 20,
    color: '#011028',
    fontSize: 16,
    fontWeight: 700
  },
  link: {
    backgroundColor: 'blue',
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  }
})

export default Live;
