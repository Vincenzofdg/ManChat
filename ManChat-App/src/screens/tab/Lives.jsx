import React, {useState} from 'react';
import { StyleSheet, View, SafeAreaView, Switch, FlatList, Text } from 'react-native';

import { lives } from '../../mock';
import Live from '../../component/tab/Live';

function Lives() {
  const [filter, SetFilter] = useState(false)

  const renderLiveCard = ({item}) => <Live info={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.text}>Filter by TOPIC</Text>
        <Switch 
          value={filter}
          onValueChange={() => SetFilter(!filter)}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={lives}
          horizontal={false}
          renderItem={renderLiveCard}
          keyExtractor={({id}) => id}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  filter: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginRight: 30
  },  
  list: {
    alignSelf: 'center'
  }
})

export default Lives;
