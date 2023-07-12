import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Return from '../../component/ReturnArrow';

function Profile({route: {params}, navigation}) {
  console.log(params)
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Return nav={navigation} />

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
})

export default Profile;
