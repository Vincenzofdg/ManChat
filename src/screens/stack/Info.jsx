import React, { useContext, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Context from '../../context/Context';


import InputType from '../../component/stack/InputType';
import ArrowRight from '../../component/stack/ArrowRight';

import Picture from '../../../assets/background.jpg'

import { inputsTypes } from '../../localized/Roles';
import localized from '../../localized/SignUp';

function Info() {
  const { info } = useContext(Context)
  const [ click, setClick ] = useState(0)
  const [ next, setNext ] = useState(false)
  const {navigate} = useNavigation();
  const inputRefs = useRef([]);
  const str = localized[info.language] || localized['en'];

  const handleNext = () => {
    if (click + 1 < inputsTypes.length) {
      inputRefs.current[click + 1].focus(); // To focus on Next
      setClick(prev => prev + 1)
    } else if (click + 1 == inputsTypes.length) {
      navigate('Picture')
    }
    setNext(false)
  }

  return (
    <>
      <ImageBackground resizeMode='cover' source={Picture} style={styles.img} />
      <KeyboardAvoidingView style={styles.page} behavior='height'>
        {
          inputsTypes.map((input, index) => 
            <InputType 
              key={input + '-key'}
              label={str[input]}  
              type={input}
              isVisible={click === index}
              next={setNext}
              reference={inputRefs}
              i={index}
            />
          )
        }
        <ArrowRight action={handleNext} isOn={next} />
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-evenly',
    height: '100%',
    marginTop: 45,
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.4,
    zIndex: 0,
  },
})

export default Info;
