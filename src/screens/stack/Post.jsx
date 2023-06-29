import React, { useContext, useState, useEffect } from 'react';
import Context from '../../context/Context'
import { 
  StyleSheet, 
  SafeAreaView, 
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  Dimensions, 
  TouchableOpacity,
  Image,
  KeyboardAvoidingView } from 'react-native';

import localized from '../../localized/App'

import Imgs from '../../localized/Images';

const { height , width } = Dimensions.get('window');

function Post({route: {params}, navigation}) {
  const { info } = useContext(Context);
  const [comment, SetComment] = useState('')
  const [comments, SetComments] = useState([])
  const str = localized[info.language] || localized['en'];

  useEffect(() => {}, [comments])

  const goBack = () => navigation.goBack();
  const handleChange = (text) => SetComment(text);
  const handlePress = () => {
    comments.push(comment)
    SetComment('');
  }

  return (
    <ScrollView>
      <TouchableOpacity style={styles.goBack} onPress={goBack}>
        <View style={styles.arrow}>
          <View style={[styles.arrow.bar, {transform: [{rotate: '-30deg'}]}]}/>
          <View style={[styles.arrow.bar, {transform: [{rotate: '30deg'}]}]}/>
        </View>
        <Text style={{color: 'white'}}>Return</Text>
      </TouchableOpacity>

      <View style={styles.post}>
        <View style={styles.postUp}>
          <TouchableOpacity style={{marginRight: 10}}>
            <Image style={styles.profile} source={Imgs.profile}/>
          </TouchableOpacity>
          
          <Text style={{fontSize: 12, flexGrow: 1}}>{params.auth} posted {params.posted} hours ago</Text>
        
          <Text style={[styles.tag, {backgroundColor: 'pink',}]}>{params.tag}</Text>
        </View>
      </View>



    </ScrollView>
    // <KeyboardAvoidingView behavior='padding'>
    //   <ArrowLeft action={goBack} text={str.back}/>
    //   <View style={styles.upperContainer}>
    //     <Text style={styles.title}>{params.title}</Text>
    //     <View style={styles.tag}>
    //       <Text style={{color: 'white', textAlign: 'center'}}>{params.tag}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.content}>
    //     <Text style={styles.contentText}>{params.content}</Text>
    //   </View>
    //   <View style={styles.comments}>
        
    //     <Text style={styles.commentLabel}>Comments:</Text>
    //     <View>
    //       {
    //         comments.map(comment => {
    //           return (
    //             <Text key={comment} style={styles.commentLabel}>{comment}</Text>
    //           )
    //         })
    //       }
    //     </View>


    //     <View style={styles.commentContainer}>
    //       <TextInput 
    //         style={styles.commentInput} 
    //         placeholderTextColor="white" 
    //         placeholder='reply...'
    //         value={comment}
    //         onChangeText={handleChange}
    //       />
          
    //         <TouchableOpacity onPress={handlePress} style={styles.btnPost}>
    //           <Text style={{color: 'white'}}>Send</Text>
    //         </TouchableOpacity>
    //     </View>
    //   </View>
    // </KeyboardAvoidingView>
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
    tintColor: 'black',
  },
  tag: {
    minWidth: 60,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  postMiddle: {
    
  },
  postDown: {
    
  },
})

export default Post;
