import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import str from '../../localized/Strings';
import { getAllUsers } from '../../services/getRequest';
import { createUser } from '../../services/postRequest';

export default function Button({pass}) {
    const { navigate } = useNavigation();

    const handlePress = async () => {
      const { listiner, setCheck, check: {status} } = pass;

      setCheck(prev => ({...prev, enter: true}));

      const checkInputs = Object.values(status).every(i => !!i);

      if (!!checkInputs) {
        const users = await getAllUsers();
        const doesUserExists = users.some(
          db => db.username === listiner.username || db.email === listiner.email
        )

        if (!doesUserExists) {
          const { term1, term2, ...user } = listiner;

          await createUser(user)

          // navigate('HomePage');
        }
      }
    }

    return (
      <TouchableOpacity 
        onPress={handlePress}
        style={styles.container}>
        <Text style={styles.text}>{str.newUser.proceed}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: - 30,
    right: 40,
    width: 100,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "rgb(07, 25, 51)",
    fontSize: 14,
    fontWeight: '500',
  }
});
