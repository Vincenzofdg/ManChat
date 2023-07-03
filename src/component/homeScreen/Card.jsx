import React, {useState ,useContext, useEffect} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View, Image } from 'react-native';

import Imgs from '../../localized/Images';

import { tags } from '../../mock';

const { width } = Dimensions.get('window');

function Card({data, idDisabled}) {
  const {info} = useContext(Context);
  const [tagColor, setTagColor] = useState(''); 
  const { navigate } = useNavigation();
  const str = localized[info.language] || localized['en'];
  
  useEffect(() => {
    // get tag color
    const getColor = tags.reduce((acc, cur) => {
      if (cur.name === data.tag) {
        acc = cur.color;
        return acc;
      }
      return acc;
    }, '')

    setTagColor(getColor)
  }, [tags]);

  const handlePress = () => navigate('Post', data);

  return (
    <TouchableOpacity disabled={!idDisabled} style={styles.card} onPress={handlePress}>
      <View style={styles.up}>
        <Text style={styles.up.text}>{str.timeStatus(data.auth, data.posted)}</Text>
        <Text style={[styles.up.text, styles.up.tag, {backgroundColor: !!tagColor && tagColor}]}>{data.tag}</Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.middle.title}>{data.title}</Text>
        <Text style={styles.middle.content}>{data.content}</Text>
      </View>

      <View style={styles.down}>
        <Image source={Imgs.like} style={styles.down.icon} />
        <Text style={styles.down.text}>{data.likes}</Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5FEFD', 
    width: width - 30,
    maxHeight: 220,
    borderRadius: 20,
    marginBottom: 15,
    padding: 12,
  },
  up: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    text: {
      fontSize: 11
    },
    tag: {
      minWidth: 50,
      padding: 4,
      textAlign: 'center',
      borderRadius: 10,
      overflow: 'hidden',
    }
  },
  middle: {
    title: {
      fontSize: 13,
      fontWeight: 700,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 10
    },
    content: {
      fontSize: 12,
      marginBottom: 8,
      maxHeight: 100,
      overflow: 'hidden',
    }
  },
  down: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    icon: {
      width: 17,
      height: 17,
      marginRight: 6,
      tintColor: 'gray'
    },
    text: {
      fontSize: 10,
      color: 'gray'
    }
  }
})

export default Card;
