import React, {useContext, useEffect, useState  } from 'react';
import Context from '../../context/Context';
import { useTheme } from '@react-navigation/native';
import { 
  StyleSheet, 
  Dimensions, 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList } from 'react-native';

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
    }));
    // ==>
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

        <View style={{flexGrow: 1, flex: 1, justifyContent: 'space-around'}}>
          { tagList(user.tags, true) }
          { tagList(otherTags, false) }
        </View>
        
        <View style={styles.line} />

        <View style={styles.status} >
          <StatusBtn text={str.newMessager} type={'message'}/>
          <StatusBtn text={str.newReplies} type={'reply'}/>
        </View>
      </View>

      <TouchableOpacity style={styles.rest} onPress={menuClose} />
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

    paddingTop: 50,
    paddingBottom: 100,
    height,
    width: width / 1.5,
  },
  topicsTitle: {
    height: '45%',
    marginTop: 10,
  },
  topics: {
    marginLeft: 30,
    marginBottom: 5,
    fontSize: 15,
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
    marginLeft: 25
  }
});
