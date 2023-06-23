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
  KeyboardAvoidingView } from 'react-native';

import localized from '../../localized/App'
import ArrowLeft from '../../component/stack/ArrowLeft';

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
    <KeyboardAvoidingView behavior='padding'>
      <ArrowLeft action={goBack} text={str.back}/>
      <View style={styles.upperContainer}>
        <Text style={styles.title}>{params.title}</Text>
        <View style={styles.tag}>
          <Text style={{color: 'white', textAlign: 'center'}}>{params.tag}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{params.content}</Text>
      </View>
      <View style={styles.comments}>
        
        <Text style={styles.commentLabel}>Comments:</Text>
        <View>
          {
            comments.map(comment => {
              return (
                <Text key={comment} style={styles.commentLabel}>{comment}</Text>
              )
            })
          }
        </View>


        <View style={styles.commentContainer}>
          <TextInput 
            style={styles.commentInput} 
            placeholderTextColor="white" 
            placeholder='reply...'
            value={comment}
            onChangeText={handleChange}
          />
          
            <TouchableOpacity onPress={handlePress} style={styles.btnPost}>
              <Text style={{color: 'white'}}>Send</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  upperContainer: {
    minHeight: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 600,
    fontSize: 18
  },
  tag: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 70,
  },
  content: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  contentText: {
    color: 'white',
    lineHeight: 25,
  },
  btnPost: {
    backgroundColor: 'gray',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentContainer: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  comments: {
    marginTop: 30,
  },
  commentInput: {
    color: 'white',
    width: width - 100,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
  },
  commentLabel: {
    color: 'white',
    padding: 40,
  }
})

export default Post;
