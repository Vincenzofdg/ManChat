import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import Context from '../../context/Context';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Tag({name, selected}) {
  const { user: {tags}, setUser } = useContext(Context)
  const { colors: {text} } = useTheme(); 
  const { navigate } = useNavigation();

  const theme = (css) => [styles[css], {color: text}];

  const handleClickOnTagName = () => navigate('SearchByTag', name);

  const addOrRemoveTag = () => {
    if (!!selected) {
      const newTags = tags.filter(tag => tag !== name);
      setUser((prev) => ({ 
        ...prev, 
        tags: newTags
      }))
      return
    }
    setUser((prev) => ({ 
      ...prev, 
      tags: [...prev.tags, name] 
    }))
    return
  }

  return (
    <View style={styles.tag}>
      {/* DEPOIS SUBISTIBUIR PELO ICON */}
      <View style={styles.icon}/>
      <View style={styles.tagName}>
        <Text style={theme('tagText')} onPress={handleClickOnTagName}>{name}</Text>
        <TouchableOpacity style={styles.mask} onPress={addOrRemoveTag}>
          <View style={styles.selected} />
          { !selected && <View style={styles.notSelected} /> }
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    marginLeft: 30,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 30
  },
  tagName: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  tagText: {
    fontSize: 14
  },
  mask: {
    borderRadius: 30,
    width: 25,
    height: 25,
    borderColor: 'white',
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: 'white',
    width: '70%',
    height: 3,
    borderRadius: 5
    
  },
  notSelected: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 3,
    height: '70%',
    borderRadius: 5
  },
});
