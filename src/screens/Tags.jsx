import React, { useContext } from 'react';
import Context from '../context/Context'
// import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

// import localized from '../localized/Tags'
import { tags } from '../localized/Roles'

function SignUp() {
  // const { navigate } = useNavigation();
  const { info, user, setUser } = useContext(Context)

  console.log(user.photo)

  return (
    <SafeAreaView style={styles.page}>
      <Text style={{color: 'white'}}>tags page</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {

  }
})

export default SignUp;
