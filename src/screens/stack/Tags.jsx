import React, { useContext } from 'react';
import Context from '../../context/Context'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

import localized from '../../localized/SignUp';
import { tags } from '../../mock';
import ArrowRight from '../../component/stack/ArrowRight';
import Tag from '../../component/stack/Tag';

function SignUp() {
  const { navigate } = useNavigation();
  const { info, user } = useContext(Context);
  const str = localized[info.language] || localized['en'];
  const name = user.fullName.split(' ')[0];

  const handlesNext = () => navigate('HomePage');

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.title}>
        <Text style={styles.text}>{str.greetings(name)}</Text>
        <Text style={styles.text}>{str.instruction}</Text>
      </View>
      <View style={styles.tags}>
        {
          tags.map(tag => <Tag key={tag.name + '-key'} name={ tag.name } />)
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
