import React, { useContext } from 'react';
import Context from '../../context/Context'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import localized from '../../localized/App';
import Return from '../../component/ReturnArrow';

function Profile({route: {params}, navigation}) {
  const { info } = useContext(Context);
  const str = localized[info.language] || localized['en'];

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
