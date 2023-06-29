import React, {useContext, useEffect, useState} from 'react';
import Context from '../../context/Context';
import { 
  BackHandler, 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  Image, 
  TouchableOpacity,
  TextInput } from 'react-native';

import Imgs from '../../localized/Images';
import Card from '../../component/homeScreen/Card';
import HiddenMenu from '../../component/homeScreen/HiddenMenu';

import { posts as data } from '../../mock';

function Home() {
  const { user: {photo} } = useContext(Context)
  const [hideMenu, setHideMenu] = useState(true)
  const [postToSearch, setPostToSearch] = useState('')
  const [posts, setPosts] = useState('')

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler()

    setPosts(data)
  }, []);

  const toggleMenuClick = () => setHideMenu(!hideMenu);

  const handleChange = (value) => {
    const filteredPosts = data.filter(({title}) => (title.toLowerCase()).includes(value.toLowerCase()))
    setPostToSearch(value);
    setPosts(filteredPosts)
  }

  const renderCard = ({item}) => <Card idDisabled={hideMenu} info={item} />;

  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.navContainer}>
        <TouchableOpacity  style={styles.menu} onPress={toggleMenuClick}>
          <Image source={Imgs.menu} style={{width: 30, height: 30, opacity: hideMenu ? 1 : 0.05}} />
        </TouchableOpacity>
        <Image source={Imgs.app} style={{width: 45, height: 45}} />
        <TouchableOpacity disabled={hideMenu ? false : true}>
          <Image source={{uri: photo || Imgs.profile}} style={styles.profilePicture} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image source={Imgs.search} style={styles.searchIcon} />
        <TextInput 
          value={postToSearch}
          onChangeText={handleChange}
          placeholder='Search for answers'
          style={styles.searchPost}
          placeholderTextColor='black'
        />
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
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  searchContainer: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10
  },
  searchPost: {
    flexGrow: 1
    // width: '100%',
    // height: '100%',
  }
})

export default Home;
