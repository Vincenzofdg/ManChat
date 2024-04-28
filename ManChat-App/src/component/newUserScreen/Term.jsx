import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import str from '../../localized/Strings';

export default function Term({action, i, check: {enter, status}}) {
  const [selected, setSelected] = useState(false);

  enter && (!status[`term${i + 1}`] && { true: '#F15927', false: '#F15927' })
  useEffect(() => {
    action(prev => ({
      ...prev,
      [`term${i + 1}`]: selected
    }))
  }, [selected])

  return (
    <View style={styles.container}>
      <CheckBox
        value={selected}
        onValueChange={setSelected}
        style={{marginRight: 15}}
        tintColors={enter && (!status[`term${i + 1}`] && { false: '#F15927' })}
        />
      <Text style={styles.text}>{str.newUser.terms[i]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: '500',
  }
});
