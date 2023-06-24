import React, {useEffect, useContext, useState} from 'react';
import Context from '../../context/Context';
import { BackHandler, FlatList, StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import Card from '../../component/tab/Card';

import HiddenMenu from '../../component/homeScreen/HiddenMenu';

import localized from '../../localized/App';
import { posts } from '../../mock';

import Menu from '../../assets/menu.png'
import App from '../../assets/app.png'

const { height , width } = Dimensions.get('window');

function Home() {
  const {user: {photo, tags}, info} = useContext(Context);
  const [hideMenu, setHideMenu] = useState(true)
  const str = localized[info.language] || localized['en'];

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

  const renderCard = ({item}) => <Card idDisabled={hideMenu} info={item} />;

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.navContainer}>

        <TouchableOpacity  style={styles.menu} onPress={toggleMenuClick}>
          <Image source={Menu} style={{width: 35, height: 35, opacity: hideMenu ? 1 : 0.05}} />
        </TouchableOpacity>

        <Image source={App} style={{width: 50, height: 50}} />

        <TouchableOpacity disabled={hideMenu ? false : true}>
          <Image source={{uri: photo}} style={styles.photo} />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 30}}>
        <FlatList
          data={posts}
          horizontal={false}
          renderItem={renderCard}
          keyExtractor={({id}) => id}
          scrollEnabled={hideMenu} 
        />
      </View>

      {/* toggle menu on */}
      <HiddenMenu icon={Menu} isOn={!hideMenu} hide={toggleMenuClick}/>
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
    marginTop: 10,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  }



  
  // toggleContent: {
  //   padding: 30
  // },
  // topic: {
  //   color: 'white',
  //   fontWeight: 600,
  //   fontSize: 16,
  //   marginBottom: 15,
  // },
  // text: {
  //   color: 'white',
  //   fontWeight: 400,
  //   fontSize: 14,
  //   marginBottom: 10,
  //   flexGrow: 1,
  //   textAlign: 'center',
  // },
  // status: {
  //   position: 'absolute',
  //   bottom: 100,
  //   width: width / 1.7,
  //   height: 100,
  //   padding: 10,
  //   justifyContent: 'space-around',
  //   borderTopWidth: 1,
  //   borderTopColor: 'white'
  // },
  // statusContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'center'
  // },
  // statusTopic: {
  //   color: 'white',
  //   fontWeight: 600,
  //   fontSize: 16,
  //   textAlign: 'center'
  // },
  // counter: {
  //   width: 30,
  //   color: 'white',
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   borderRadius: 10,
  //   textAlign: 'center',
  //   marginRight: 25,
  // }
})

export default Home;
