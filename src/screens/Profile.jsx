import React, {useContext, useState, useRef} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  StyleSheet, 
  KeyboardAvoidingView, 
  Image,
  TouchableOpacity
} from 'react-native';

import Context from '../context/Context';
import InputType from '../component/Profile/InputType';
import Arrow from '../../assets/arrow.png'
import localized from '../localized/Profile'
import { inputsTypes } from '../localized/Roles';

function Profile() {
  const { info, user } = useContext(Context)
  const [ click, setClick ] = useState(0)
  const [ next, setNext ] = useState(false)
  const {navigate} = useNavigation();
  const inputRefs = useRef([]);
  const str = localized[info.language] || localized['en'];
  
  const handleNext = () => {
    if (click + 1 < inputsTypes.length) {
      inputRefs.current[click + 1].focus();
      setClick(prev => prev + 1)
    } else if (click + 1 == inputsTypes.length) {
      console.log(user)
      navigate('SignUp')
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
      <TouchableOpacity style={styles.next} onPress={handleNext} disabled={!next}>
        <Image source={Arrow} style={styles.arrow} resizeMode="contain" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-evenly',
    height: '100%',
    marginTop: 45,
  },
  next: {
    backgroundColor: '#02183C',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 30,
    marginRight: 35,
    transform: [{ rotate: '270deg' }],
  },
  arrow: {
    width: 40, 
    height: 40,
  }
})

export default Profile;
