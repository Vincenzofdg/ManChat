import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

function Profile() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Interests"
        onPress={() => navigation.navigate('Interests')}
      />
    </View>
  )
  
}

export default Profile;
