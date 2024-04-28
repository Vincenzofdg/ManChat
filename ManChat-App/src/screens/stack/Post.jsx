import React, { useContext, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Context from '../../context/Context'
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  Image, 
  SafeAreaView} from 'react-native';

import localized from '../../localized/App'
import Imgs from '../../localized/Images';
import Return from '../../component/ReturnArrow'

import getPostedTime from '../../Hooks/getPostedTime';

import { posts as data } from '../../mock';

function Post({route: {params}, navigation}) {
  const { info, user, setUser } = useContext(Context);
  const [userLiked, setUserLiked] = useState(false);
  const [postTimer, setPostTimer] = useState(0);
  const str = localized[info.language] || localized['en'];
  const { navigate } = useNavigation();

  useEffect(() => {
    const howLongItHasBeenPosted = getPostedTime(params.posted);

    !!user.postLiked.includes(params.id) ? setUserLiked(true) : setUserLiked(false);
    setPostTimer(howLongItHasBeenPosted);
  }, [user]);
  
  const handleLikeThePost = () => {    
    const newLikesCount = Number(params.likes) + (!!userLiked ? -1 : +1);
    params.likes = newLikesCount;
    
    setUser(prev => {
      const { postLiked } = prev;
      if (!userLiked) {
        postLiked.push(params.id);
        return ({ ...prev, postLiked })
      }
      else {
        const removed = postLiked.filter(id => id !== params.id)
        return ({ ...prev, postLiked: removed })
      }
    })
    
    // update database
    const postID = params.id;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === postID) {
        data[i].likes = newLikesCount;
        break; 
      }
    }
  };

  const handleClickOnTagName = () => navigate('SearchByTag', params.tag);

  return (
    <ScrollView>
      <SafeAreaView>
        <Return nav={navigation} />
        <View style={styles.post}>
          <View style={styles.postUp}>
            <TouchableOpacity style={{marginRight: 5}}>
              <Image style={styles.profile} source={{uri: user.photo || Imgs.profile}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 10, flexGrow: 1, color: 'black'}}>{str.timeStatus(params.auth, postTimer)}</Text>
            <TouchableOpacity onPress={handleClickOnTagName}>
              <Text style={[styles.tag, {backgroundColor: params.tagColor,}]}>{params.tag}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.postMiddle}>
            <Text style={styles.postTitle}>{params.title}</Text>
            <Text style={styles.postContent}>{params.content}</Text>
          </View>
          <View style={styles.postDown}>
            <TouchableOpacity style={styles.like} onPress={handleLikeThePost}>
              <Image source={Imgs.like} style={[styles.like.icon, { tintColor: userLiked ? 'blue' : 'gray'}]} />
              <Text style={[ styles.like.qtd, {color: userLiked ? 'blue' : 'gray'} ]}>{params.likes}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: 'white',
    padding: 10,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10
  },
  postUp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  tag: {
    color: 'black',
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5
  },
  postMiddle: {
    padding: 10
  },
  postTitle: {
    color: 'black',
    fontWeight: 700,
    padding: 15,
    textAlign: 'center'
  },
  postContent: {
    color: 'black',
    lineHeight: 20,
  },
  postDown: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  like: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    icon: {
      width: 18,
      height: 18,
    },
    qtd: {
      color: 'gray',
      fontSize: 12,
      marginLeft: 5,
    }
  }
})

export default Post;
