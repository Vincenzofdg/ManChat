import React, {useState ,useContext, useEffect} from 'react';
import Context from '../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, Dimensions, Text, View, Image } from 'react-native';

import getPostedTime from '../../Hooks/getPostedTime';
import Imgs from '../../localized/Images';


import { tags } from '../../mock';

const { width } = Dimensions.get('window');

function Card({data, idDisabled}) {
  const {info, user} = useContext(Context);
  const [tagColor, setTagColor] = useState('');
  const [postTimer, setPostTimer] = useState(0);
  const [hasBeenLiked, setHasBeenLiked] = useState(false); 
  const { navigate } = useNavigation();
  const str = localized[info.language] || localized['en'];
  
  useEffect(() => {
    // check if post has been liked
    // const userLikedPost = user.postLiked.includes(data.id);
    // userLikedPost ? setHasBeenLiked(true) : setHasBeenLiked(false)

    // How long has been posted
    const howLongItHasBeenPosted = getPostedTime(data.posted);
    setPostTimer(howLongItHasBeenPosted)
  
    // get tag color
    const getColor = tags.reduce((acc, cur) => {
      if (cur.name === data.tag) {
        acc = cur.color;
        return acc;
      }
      return acc;
    }, '')
    setTagColor(getColor)
  }, [tags, user]);

  const handlePress = () => navigate('Post', {...data, tagColor});

  return (
    <TouchableOpacity disabled={!idDisabled} style={styles.card} onPress={handlePress}>
      <View style={styles.up}>
        <Text style={styles.up.text}>{str.timeStatus(data.auth, postTimer)}</Text>
        <Text style={[styles.up.text, styles.up.tag, {backgroundColor: !!tagColor && tagColor}]}>{data.tag}</Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.middle.title}>{data.title}</Text>
        <Text style={styles.middle.content}>{data.content}</Text>
      </View>

      <View style={styles.down}>
        <Image 
          source={Imgs.like} 
          style={[
            styles.down.icon, 
            {
              tintColor: !!hasBeenLiked ? 'blue' : 'gray',
            }
          ]}
        />
        <Text 
          style={[
            styles.down.text,
            {
              color: !!hasBeenLiked ? 'blue' : 'gray',
            }
          ]}
        >
          {data.likes}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F5FEFD', 
    width: width - 30,
    minHeight: 100,
    borderRadius: 20,
    marginBottom: 15,
    padding: 12,
  },
  up: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    text: {
      color: 'black',
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
      color: 'black',
      fontSize: 13,
      fontWeight: 700,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 10
    },
    content: {
      color: 'black',
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
    },
    text: {
      fontSize: 10,
    }
  }
})

export default Card;
