import React, {useEffect} from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';


function Home() {

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler()
  }, []);

  return (
    <View>
      <Text style={styles.color}>HOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  color: {
    color: 'white'
  }
})

export default Home;
