import React, {useContext} from 'react';
import Context from '../context/Context';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function ReturnArrow({nav}) {
  const { info } = useContext(Context);
  const str = localized[info.language] || localized['en'];
  const goBack = () => nav.goBack();

  return (
    <TouchableOpacity style={styles.goBack} onPress={goBack}>
      <View style={styles.arrow}>
        <View style={[styles.arrow.bar, {transform: [{rotate: '-30deg'}]}]}/>
        <View style={[styles.arrow.bar, {transform: [{rotate: '30deg'}]}]}/>
      </View>
      <Text style={{color: 'white'}}>{str.back}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  goBack: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    width: 60,
    height: 20,
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

export default ReturnArrow;
