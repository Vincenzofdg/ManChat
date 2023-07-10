import React, { useContext, useState, useEffect } from 'react';
import Context from '../../context/Context'
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  Image } from 'react-native';

import localized from '../../localized/App'
import Imgs from '../../localized/Images';

import { posts as data } from '../../mock';

function Post({route: {params}, navigation}) {
  const { info, user, setUser } = useContext(Context);
  const [userLiked, setUserLiked] = useState(false);
  const str = localized[info.language] || localized['en'];

  useEffect(() => {
    !!user.postLiked.includes(params.id) ? setUserLiked(true) : setUserLiked(false);
  }, [user]);
    
  const goBack = () => navigation.goBack();

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
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <View style={styles.arrow}>
          <View style={[styles.arrow.bar, {transform: [{rotate: '-30deg'}]}]}/>
          <View style={[styles.arrow.bar, {transform: [{rotate: '30deg'}]}]}/>
        </View>
        <Text style={{color: 'white'}}>{str.back}</Text>
      </TouchableOpacity>


      <View style={styles.post}>
        <View style={styles.postUp}>
          <TouchableOpacity style={{marginRight: 5}}>
            <Image style={styles.profile} source={{uri: user.photo || Imgs.profile}}/>
          </TouchableOpacity>
          <Text style={{fontSize: 10, flexGrow: 1}}>{str.timeStatus(params.auth, params.posted)}</Text>
          <Text style={[styles.tag, {backgroundColor: params.tagColor,}]}>{params.tag}</Text>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  goBack: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    width: 60,
    height: 20,
  },
  arrow: {
    justifyContent: 'center',
    bar: {
      position: 'absolute',
      left: -12,
      backgroundColor: 'white',
      width: 25,
      height: 3,
      borderRadius: 20
    }
  },
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
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5
  },
  postMiddle: {
    padding: 10
  },
  postTitle: {
    fontWeight: 700,
    padding: 15,
    textAlign: 'center'
  },
  postContent: {
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
