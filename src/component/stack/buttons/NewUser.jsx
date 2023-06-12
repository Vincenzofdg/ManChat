import React, {useContext} from 'react';
import Context from '../../../context/Context';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import localized from '../../../localized/SignUp';
import { userObj } from '../../../localized/Roles';

export default function NewUser() {
  const { navigate } = useNavigation();
  const { info, setUser } = useContext(Context)
  const str = localized[info.language] || localized['en'];

  const handleNewUser = () => {
    setUser(userObj)
    navigate('Info')
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={handleNewUser}>
      <Text style={styles.text}>{str.signUp}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'black',
    opacity: 0.7,
    width: 280,
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 600,
  },
});
