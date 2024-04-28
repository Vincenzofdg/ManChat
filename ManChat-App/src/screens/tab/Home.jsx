import React, {useContext, useEffect, useState} from 'react';
import Context from '../../context/Context';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { 
  BackHandler, 
  FlatList,
  Dimensions,
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

const { height } = Dimensions.get('window');

function Home() {
  const { user, info } = useContext(Context);
  const [hideMenu, setHideMenu] = useState(true);
  const [postToSearch, setPostToSearch] = useState('');
  const [posts, setPosts] = useState('');
  const { navigate } = useNavigation();
  const isFocused = useIsFocused();

  const str = localized[info.language] || localized['en'];

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler();

    // Reset states
    if (isFocused) {
      setHideMenu(true)
      setPostToSearch('')
    }

    // Sort post by newests
    const sortedData = [...data].sort((a, b) => {
      const [monthA, dayA, yearA] = a.posted.split('/');
      const [monthB, dayB, yearB] = b.posted.split('/');
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB)
      
      return dateB - dateA;
    });

    setPosts(sortedData);
  }, [data, isFocused]);

  const renderCard = ({item}) => <Card idDisabled={hideMenu} data={item} />;

  const toggleMenuClick = () => setHideMenu(!hideMenu);
  const handleChange = (value) => setPostToSearch(value);
  const userProfileNavigate = () => navigate('Profile', user);

  const flatListData = (list) => {
    try {
      const search = postToSearch.toLowerCase()
      const filteredPosts = list.filter(({title}) => (title.toLowerCase()).includes(search))
      return filteredPosts;
    } catch (error) {
      return []
    }
  };

  return (
    <SafeAreaView style={styles.home}>

      <View style={styles.header}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={toggleMenuClick}>
            <Image source={Imgs.menu} style={[styles.nav.menu, { opacity: hideMenu ? 1 : 0.05}]} />
          </TouchableOpacity>
          <Image source={Imgs.app} style={styles.nav.logo} />
          <TouchableOpacity disabled={hideMenu ? false : true} onPress={userProfileNavigate}>
            <Image source={!user.profile ? Imgs.profile : {uri: user.picture}} style={styles.nav.profile} />              
          </TouchableOpacity>
        </View>
        <View style={styles.searchText}>
          <Image source={Imgs.search} style={styles.searchText.icon} />
          <TextInput 
            value={postToSearch}
            onChangeText={handleChange}
            placeholder={str.inputSearch}
            style={styles.searchText.placeholderText}
            placeholderTextColor='black'
          />
        </View>
      </View>

      <View style={{height: height * 0.8}}>
        <FlatList
          data={flatListData(posts) || []}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderCard}
          keyExtractor={({id}) => id}
          scrollEnabled={hideMenu}
        />
      </View>
      
      {/* <HiddenMenu icon={Imgs.menu} isOn={!hideMenu} hide={toggleMenuClick}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
  },
  header: {
    height: height * 0.14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  nav: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    menu: { width: 30, height: 30 },
    logo: {width: 50, height: 45},
    profile: {
      width: 42,
      height: 42,
      borderRadius: 50
    }
  },
  searchText: {
    width: '90%',
    height: '45%',
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    icon: {
      width: 30,
      height: 30,
      marginRight: 10,
      marginLeft: 10
    },
    placeholderText: {
      flexGrow: 1
    }
  },
})

export default Home;
