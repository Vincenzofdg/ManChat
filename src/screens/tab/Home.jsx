import React, {useEffect, useState} from 'react';
import { 
  BackHandler, 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Image, 
  TouchableOpacity } from 'react-native';

import Imgs from '../../localized/Images';
import Card from '../../component/homeScreen/Card';
import HiddenMenu from '../../component/homeScreen/HiddenMenu';

import { posts } from '../../mock';

function Home() {
  const [hideMenu, setHideMenu] = useState(true)

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler()
  }, []);

  const toggleMenuClick = () => setHideMenu(!hideMenu);

  const renderCard = ({item}) => <Card idDisabled={hideMenu} info={item} />;

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.navContainer}>
        <TouchableOpacity  style={styles.menu} onPress={toggleMenuClick}>
          <Image source={Imgs.menu} style={{width: 30, height: 30, opacity: hideMenu ? 1 : 0.05}} />
        </TouchableOpacity>

        <Image source={Imgs.app} style={{width: 45, height: 45}} />

        <TouchableOpacity disabled={hideMenu ? false : true}>
          {/* <Image source={{uri: photo}} style={{width: 30, height: 30}} /> */}
          <Image source={Imgs.profile} style={{width: 35, height: 35}} />
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
      <HiddenMenu icon={Imgs.menu} isOn={!hideMenu} hide={toggleMenuClick}/>
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
  }
})

export default Home;
