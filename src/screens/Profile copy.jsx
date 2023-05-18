import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

function Profile() {
  const navigation = useNavigation();
  const [profilePicture, setProfilePicture] = useState('');
  const [user, setUser] = useState({name: '', age: '', bio: ''});
  const [mayPass, setMayPass] = useState(false);
  const inputs = ['name', 'age', 'bio'];

  useEffect(() => {
    const condition = !!user.name && !!user.age
    condition && setMayPass(true)
  }, [user])

  const handlePictureChange = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      const condition = !response.didCancel && !response.error;
      condition && setProfilePicture(response.assets[0].uri);
    });
  }

  const handleSubmit = () => {
    navigation.navigate('Interests')
  }

  const inputModel = (param) => {
    const textContent = param === 'age' ? 'Age' : (param === 'name' ? 'Username' : 'Bio');
    const max = param === 'age' ? 2 : (param === 'name' ? 12 : 110);
    const keybord = param === 'age' ? 'numeric' : 'default';
    const lines = param === 'bio' ? 4 : 1;
    const hasmultiples = param==='bios' && true;
    const biosCSS = param === 'bio' && [
      {alignItems: 'center', justifyContent: 'space-between'}, 
      {borderWidth: 1, flexGrow: 1}
    ];
    const ageCSS = param === 'age' && {width: 40}


    const handleChange = (text) => setUser((prev) => ({ ...prev, [`${param}`]: text }));

    return (
      <View style={[styles.input, biosCSS[0]]} key={param + '-key'}>
        <Text style={{color: 'white', fontWeight: 500, marginRight: 20}}>{textContent}</Text>
        <TextInput 
          style={[styles.inputCustom, biosCSS[1], ageCSS]}
          keyboardType={keybord}
          multiline={hasmultiples}
          numberOfLines={lines}
          maxLength={max}
          onChangeText={handleChange}
          value={user[`${param}`]}
          textAlignVertical={param==='bios' ? 'bottom' : 'center'}
        />
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={styles.page} behavior='padding'>
      <View style={styles.pictureContainer}>
        <TouchableOpacity onPress={handlePictureChange}>
          {!!profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.picture} />
          ) : (
            <View style={StyleSheet.compose(styles.picture, {
              justifyContent: 'flex-end'
            })}>
              <Text style={styles.text}>Choose a Photo</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        { inputs.map(e => inputModel(e)) }
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Text 
          style={{color: `${!mayPass ? 'gray' : 'white'}`}} 
          onPress={handleSubmit}
          disabled={!mayPass}
        >
          Continue...
        </Text>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'space-around',
    height: '60%',
    marginTop: 20,
    marginRight: 35,
    marginLeft: 25,
  },
  pictureContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 25
  },
  picture: {
    height: "100%",
    width: 110,
    height: 110,
    borderRadius: 120,
    borderColor: 'gray',
    borderWidth: 1,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 25
  },
  inputContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  inputCustom: {
    // backgroundColor: 'red',
    color: 'white',
    width: 135,
    textAlign: 'center',
    alignItems: 'baseline',
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
})

export default Profile;
