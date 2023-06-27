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
  FlatList } from 'react-native';

import Tag from './Tag';
import StatusBtn from './StatusBtn';

import { tags as allTags } from '../../mock';

const { height , width } = Dimensions.get('window');

export default function HiddenMenu({isOn, hide, icon}) {
  const [otherTags, setOtherTags] = useState([])
  const { user, info } = useContext(Context)
  const { colors: {text} } = useTheme(); 
  const theme = (css) => [styles[css], {color: text}];
  const str = localized[info.language] || localized['en'];

  useEffect(() => {
    const unSelectedTags = allTags.reduce((acc, cur) => {
      const didUserSelectedIt = user.tags.includes(cur.name);
      !didUserSelectedIt && acc.push(cur.name);
      return acc;
    }, [])
    setOtherTags(unSelectedTags)
  }, [user])

  const menuClose = () => {
    // atualiza o banco de dados
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
          renderItem={renderTag}
          keyExtractor={index => `tag-${index}`}
        />
      </View>
    )
  }

  return (
    <View style={[styles.menu, { display: isOn ? 'flex' : 'none' } ]}>
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
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: "rgba(07, 25, 51, 0.8)",
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width: width / 1.7,
  },
  icon: {
    marginTop: 20,
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
    marginTop: 20,
    marginBottom: 15,
    width: '70%',
    height: 2,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  status: {
    // padding: 20,
    marginLeft: 35
  }
});
