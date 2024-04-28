import React, { useContext } from 'react';
import Context from '../../context/Context'
import { StyleSheet, SafeAreaView, Dimensions, View, Text } from 'react-native';
import Video from 'react-native-video';

import localized from '../../localized/App'
import Return from '../../component/ReturnArrow'

const { height , width } = Dimensions.get('window');

function Live({route: {params}, navigation}) {
  const { info } = useContext(Context);
  const str = localized[info.language] || localized['en'];

  return (
    <SafeAreaView>
      <Return nav={navigation}/>
      <View>
        <Video 
          // source={}
          style={styles.display}
          controls={true}
        />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.auth}>{params.auth}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  display: {
    backgroundColor: 'green',
    width,
    height: height / 3,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 20,
  },
  auth: {
    color: 'white',
    alignSelf: 'flex-end',
    marginRight: 20
  }
})

export default Live;
