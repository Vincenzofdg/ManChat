import React, {useContext, useEffect, useState  } from 'react';
import Context from '../../context/Context';
import { useTheme } from '@react-navigation/native';
import { 
  StyleSheet, 
  Dimensions, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  FlatList,
  Platform } from 'react-native';

import Tag from './Tag';
import StatusBtn from './StatusBtn';

import { tags as allTags } from '../../mock';

const { height , width } = Dimensions.get('window');

export default function HiddenMenu({isOn, hide, icon}) {
  const [otherTags, setOtherTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const { user, setUser , info } = useContext(Context)
  const { colors: {text} } = useTheme(); 
  const theme = (css) => [styles[css], {color: text}];
  const str = localized[info.language] || localized['en'];

  useEffect(() => {
    const {selected, notSelected} = allTags.reduce((acc, cur) => {
      const didUserSelectedIt = user.tags.includes(cur.name);
      if (!didUserSelectedIt) {
        acc.notSelected.push(cur.name);
        return acc;
      };
      acc.selected.push(cur.name);
      return acc;
    }, {selected: [], notSelected: []})

    setOtherTags(notSelected)
    setSelectedTags(selected)
  }, [user])

  const menuClose = () => {
    // atualiza o banco de dados
    setUser(prev => ({
      ...prev,
      tags: selectedTags,
    }))
    hide();
  }

  const tagList = (tags, isSelected) => {
    const renderTag = ({item}) => <Tag selected={isSelected} name={item} />;
    return (
      <View style={styles.topicsTitle}>
        <Text style={theme('topics')}>
          {isSelected ? str.yourTopics : str.otherTopics}
        </Text>
        <FlatList 
          data={tags}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderTag}
          keyExtractor={index => index}
        />
      </View>
    )
  }

  return (
    <View style={[styles.container, { display: isOn ? 'flex' : 'none' } ]}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.icon} onPress={menuClose}>
          <Image source={icon} style={styles.icon.size} />
        </TouchableOpacity>
        { tagList(user.tags, true) }
        { tagList(otherTags, false) }
        <View style={styles.line} />
        <View style={styles.status} >
          <StatusBtn text={str.newMessager} type={'message'}/>
          <StatusBtn text={str.newReplies} type={'reply'}/>
        </View>
      </View>

      <TouchableOpacity style={styles.rest} onPress={menuClose}>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
  },
  rest: {
    flexGrow: 1,
    height,
  },
  
  menu: {
    backgroundColor: "rgba(07, 25, 51, 0.8)",
    height,
    width: width / 1.5,
  },
  icon: {
    marginTop:  Platform.OS === 'ios'? 40 : 20,
    marginLeft: 20,
    size: {width: 30, height: 30}
  },
  topicsTitle: {
    height: width / 2.1,
    marginTop: 20,
  },
  topics: {
    marginLeft: 30,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 800
  },
  line: {
    marginTop: 25,
    marginBottom: 25,
    width: '70%',
    height: 2,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  status: {
    // padding: 20,
    marginLeft: 25
  }
});
