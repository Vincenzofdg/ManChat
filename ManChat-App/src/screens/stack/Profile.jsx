import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icons from '../../localized/Images';
import Return from '../../component/ReturnArrow';

function Profile({route: {params}, navigation}) {
  console.log(params)
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Return nav={navigation} />


        <View style={styles.userHeader}>
          <View style={styles.userHeader.up}>
            <Text style={styles.displayName}>{params.displayName}</Text>
            <TouchableOpacity>
              <Image source={Icons.home} style={{width: 25, height: 25}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.userHeader.middle}>
            <Image source={{ uri: params.photo }} style={{width: 120, height: 120, borderRadius: 100}} />
          </View>
          <View style={styles.userHeader.down}>
            <Text style={styles.userHeader.down.text}>Expert</Text>
          </View>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  userHeader: {
    backgroundColor: '#032144',
    height: 230,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'space-between',
    up: {
      // backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    middle: {
      width: 120,
      height: 120,
      borderRadius: 100
    },
    down: {
      flexDirection: 'row',
      text: {
        fontSize: 14,
        color: 'white',
        fontWeight: 500
      }
    }
  },
  displayName: {
    color: 'white',
    fontSize: 18,
    marginRight: 15,
  }
})

export default Profile;
