import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function News() {
  return (
    <SafeAreaView>
      <View style={styles.news}>
        <Text style={styles.title}>Articles</Text>
        <Text style={styles.subTitle}>Explore our newest expert articles below!</Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  news: {
    // backgroundColor: 'green',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 10,
  },
  subTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 14,
    fontWeight: 200
  },
})

export default News;
