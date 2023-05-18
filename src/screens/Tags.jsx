import React, { useContext } from 'react';
import Context from '../context/Context'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import localized from '../localized/Tags'
import { tags } from '../localized/Roles'
import ArrowRight from '../component/ArrowRight';
import Tag from '../component/Tags/Tag';

function SignUp() {
  const { navigate } = useNavigation();
  const { info, user, setUser } = useContext(Context);
  const str = localized[info.language] || localized['en'];
  const name = user.fullName.split(' ')[0];

  const handlesNext = () => {
    console.log(user)
    // navigate('Home')
  }

  return (
    <SafeAreaView style={styles.page}>

      <View style={styles.title}>
        <Text style={styles.text}>{str.greetings(name)}</Text>
        <Text style={styles.text}>{str.instruction}</Text>
      </View>

      <View style={styles.tags}>
        {
          tags.map(tag => 
            <Tag 
              key={ tag + '-key' }
              name={ tag }
            />
          )
        }
      </View>

      <ArrowRight action={handlesNext} isOn={ true }/>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    justifyContent: 'space-between',
    height: '10%',
  },
  text: {
    color: 'white',
    fontWeight: 600,
    fontSize: 16
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%',
  }
})

export default SignUp;
