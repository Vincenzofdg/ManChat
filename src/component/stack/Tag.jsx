import React, {useState, useContext} from 'react';
import Context from '../../context/Context';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Tag({name}) {
  const {user, setUser} = useContext(Context)
  const [selected, setSelected] = useState(false)

  const selectedCSS = selected && {backgroundColor: '#20325a'}
  const handlePress = () => {
    if (!selected) {
      setSelected(true)
      setUser(prev => ({
        ...prev,
        tags: [...prev.tags, name]
      }))
      return
    }
    
    const newTags = user.tags.filter(tag => tag !== name)
    
    setSelected(false)
    setUser(prev => ({
      ...prev,
      tags: newTags
    }))
    return
  }

  return (
    <TouchableOpacity 
      style={[styles.container, selectedCSS]} 
      onPress={handlePress}
    >
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#475571',
    marginLeft: 10,
    marginBottom: 12,
    minWidth: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  text: {
    fontSize: 14,
    color: 'white',
    padding: 3,
  }
});
