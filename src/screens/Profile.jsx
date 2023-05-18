import React, {useContext, useState, useRef, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, KeyboardAvoidingView, BackHandler } from 'react-native';

import Context from '../context/Context';
import InputType from '../component/Profile/InputType';
import ArrowRight from '../component/ArrowRight';
import localized from '../localized/Profile'
import { inputsTypes } from '../localized/Roles';

function Profile() {
  const { info } = useContext(Context)
  const [ click, setClick ] = useState(0)
  const [ next, setNext ] = useState(false)
  const {navigate} = useNavigation();
  const inputRefs = useRef([]);
  const str = localized[info.language] || localized['en'];

  useEffect(() => {
    function RemoveBackHandler() {
      BackHandler.addEventListener('hardwareBackPress', () => true);
    }
    RemoveBackHandler()
  }, []);

  const handleNext = () => {
    if (click + 1 < inputsTypes.length) {
      inputRefs.current[click + 1].focus();
      setClick(prev => prev + 1)
    } else if (click + 1 == inputsTypes.length) {
      navigate('TakePicture')
    }
    setNext(false)
  }

  return (
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
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-evenly',
    height: '100%',
    marginTop: 45,
  },
})

export default Profile;
