import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import images from '../../localized/Images';

const DropdownSelect = ({mainRef, action}) => {
  const [selected, setSelected] = useState('');
  const [opened, setOpened] = useState(false);

  const items = [
    { label: 'English', value: 'en' },
    { label: 'Portugues', value: 'pt' },
  ];

  useEffect(() => {
    action(prev => ({
      ...prev,
      langague: selected
    }))
  }, [selected])

  return (
      <View style={styles.container}>
        <Image source={images.world} style={styles.icon}/>
        <DropDownPicker
          items={items}
          value={selected}
          setValue={setSelected}
          onClose={setOpened}
          open={opened}
          onPress={setOpened}
          placeholder='language'
          onOpen={() => mainRef.current.blur()}
          containerStyle={{ width: 145 }}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginRight: 20,
    marginLeft: 10
  },
  icon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
})

export default DropdownSelect;
