import React, {useEffect, useContext, useState} from 'react';
import Context from '../../context/Context';
import { BackHandler, StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Dimensions, Text } from 'react-native';

const { height , width } = Dimensions.get('window');

function Home() {
  const {user: {photo, tags}} = useContext(Context);
  const [hideMenu, setHideMenu] = useState(true)

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler()
  }, []);

  const toggleMenuClick = () => setHideMenu(!hideMenu);

  const topicElement = (text, key) => {
    return (
      <View key={key} style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{height: 3, width: 40, backgroundColor: 'white'}}/>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.home}>
      <View style={[styles.navContainer, {opacity: hideMenu ? 1 : 0.3 }]}>
        <TouchableOpacity style={styles.burgerMenu} onPress={toggleMenuClick}>
          <View style={styles.burgerBar} />
          <View style={styles.burgerBar} />
          <View style={styles.burgerBar} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{uri: photo}} style={styles.photo} />
        </TouchableOpacity>
      </View>

      {/* toggle menu on */}
      <View style={[styles.expandedMenu, { display: hideMenu ? 'none' : 'flex' } ]}>
        <TouchableOpacity style={styles.menuOn} onPress={toggleMenuClick}>
          <View style={[styles.burgerBar, {transform: [{rotate: '45deg'}], width: 50}]} />
          <View style={[styles.burgerBar, {transform: [{rotate: '-45deg'}], width: 50}]} />
        </TouchableOpacity>
        <View style={styles.toggleContent}>
          <Text style={[styles.topic, {marginTop: 20,}]}>Your Topics</Text>
          {
            tags.map((tag, i) => {
              const key = `${tag}-${i}`;
              const limit = 6
              if (i === 2) return (
                <View key={key}>
                  <Text style={styles.topic}>Other Topics</Text>
                  {topicElement(tag, key)}
                </View>
              )
              if (i < limit) return topicElement(tag, key)
              if (i === limit) return (<Text key={key + '-dots'} style={styles.topic}>...</Text>)
            })
          }
        </View>
        <View style={styles.status}>
          <TouchableOpacity style={styles.statusContainer}>
            <Text style={styles.counter}>99</Text>
            <Text style={[styles.statusTopic]}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statusContainer}>
            <Text style={styles.counter}>99</Text>
            <Text style={styles.statusTopic}>Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
  },
  navContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  burgerMenu: {
    justifyContent: 'space-between',
    height: 25,
  },
  burgerBar: {
    backgroundColor: 'white',
    width: 34,
    height: 3,
    borderRadius: 40
  },
  expandedMenu: {
    backgroundColor: "black",
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width: width / 1.7,
  },
  menuOn: {
    overflow: 'hidden',
    marginTop: 48,
    marginLeft: 20,
    height: 20,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center'
  },
  toggleContent: {
    padding: 30
  },
  topic: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
    marginBottom: 15,
  },
  text: {
    color: 'white',
    fontWeight: 400,
    fontSize: 14,
    marginBottom: 10,
    flexGrow: 1,
    textAlign: 'center',
  },
  status: {
    position: 'absolute',
    bottom: 100,
    width: width / 1.7,
    height: 100,
    padding: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'white'
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  statusTopic: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16,
    textAlign: 'center'
  },
  counter: {
    width: 30,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    marginRight: 25,
  }
})

export default Home;
