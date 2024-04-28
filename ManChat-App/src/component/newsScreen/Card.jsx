import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function Card({data: {content}}) {
  return (
    <View style={styles.container}>
      {
        content.map((e, i) => {
        if (!e) return 
        return (
          <TouchableOpacity key={e + '-' + i} style={styles.card}>
            <View style={styles.photo} />
            <View style={styles.cardInfo}>
              <Text style={styles.title}>{e}</Text>
              <Text style={styles.subTitle}>subtitle subtitle ubtitle subtitle</Text>
            </View>
          </TouchableOpacity>
        )})
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    minWidth: 160,
    minHeight: 150,
    marginBottom: 10,
    
    alignSelf: 'center'
  },
  cardInfo: {
    paddingTop: 13,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexGrow: 1
  },
  title: {
    color: 'white',
    fontSize: 12,
    fontWeight: 600
  },
  subTitle: {
    color: 'white',
    fontSize: 10,
    fontWeight: 200
  },

  photo: {
    borderRadius: 10,
    width: 160,
    height: 95,
    backgroundColor: 'green'
  }
});
