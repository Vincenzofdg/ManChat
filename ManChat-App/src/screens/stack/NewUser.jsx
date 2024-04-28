import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, Text } from 'react-native';

import images from '../../localized/Images';
import str from '../../localized/Strings';
import { newUserForms as forms } from '../../localized/Structure';

import TextInput from '../../component/newUserScreen/TextInput';
import Language from '../../component/newUserScreen/Language';
import Camera from '../../component/newUserScreen/Camera';
import Term from '../../component/newUserScreen/Term';
import Button from '../../component/newUserScreen/Button';

import validation from '../../Hooks/checkNewUser';

function NewUser() {
  const [listiner, setListiner] = useState({});
  const [check, setCheck] = useState({});

  const mainRef = useRef();

  useEffect(() => {
    const status = validation(listiner);
    setCheck(prev => ({...prev, status}))
  }, [listiner])

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Image source={images.profile} style={styles.icon} />
      <Text style={styles.title}>{str.newUser.greetings}</Text>
      <View style={styles.questions} >
        {
          forms.map((c, i) => {
            if (i != 2) return <TextInput key={'new-' + i} content={{c, i}} mainRef={mainRef} action={setListiner} check={check} />
          return (
            <View key={'new-' + i} style={styles.middle}>
              <Language mainRef={mainRef} action={setListiner} />
              <TextInput content={{c, i}} mainRef={mainRef} action={setListiner} check={check} />
            </View>
          )})
        }
        <Camera action={setListiner} />
        {
          [...Array.from({length: 2})].map((_e, i) => <Term key={'term-' + i} action={setListiner} i={i} check={check} />)
        }
        <Button pass={{listiner, setCheck, check}}/>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: 'white'
  },
  questions: {
    padding: 30
  },
  middle: {
    flexDirection: 'row',
  }
})

export default NewUser;
