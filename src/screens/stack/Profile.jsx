import React, { useContext } from 'react';
import Context from '../../context/Context'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import localized from '../../localized/SignUp';


function Profile({route: {params}, navigation}) {
  const { info } = useContext(Context);
  const str = localized[info.language] || localized['en'];

  const goBack = () => navigation.goBack();
  
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <View style={styles.arrow}>
          <View style={[styles.arrow.bar, {transform: [{rotate: '-30deg'}]}]}/>
          <View style={[styles.arrow.bar, {transform: [{rotate: '30deg'}]}]}/>
        </View>
        <Text style={{color: 'white'}}>{str.back}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  arrow: {
    justifyContent: 'center',
    bar: {
      position: 'absolute',
      left: -12,
      backgroundColor: 'white',
      width: 25,
      height: 3,
      borderRadius: 20
    }
  }
})

export default Profile;
