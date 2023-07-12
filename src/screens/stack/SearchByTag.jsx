import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Return from '../../component/ReturnArrow';
import { posts } from '../../mock';

import Card from '../../component/homeScreen/Card';

function SearchByTag({route: {params}, navigation}) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [pickerValue, setPickerValue] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const postsWithTag = posts.filter(({tag}) => tag === params)
    setFilteredPosts(postsWithTag);
  }, []);

  useMemo(() => {
    const sorted = {
      newest: [...filteredPosts].sort((a, b) => {
        const [monthA, dayA, yearA] = a.posted.split('/');
        const [monthB, dayB, yearB] = b.posted.split('/');
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
   
        return dateB - dateA;
      }),
      likes: [...filteredPosts].sort((a, b) => b.likes - a.likes),
    }

    if (!!pickerValue) {
      const sortedPosts = sorted[pickerValue];
      setFilteredPosts(sortedPosts)
    }
    
  }, [pickerValue]);

  const renderCard = ({item}) => <Card idDisabled={true} data={item} />;
 
  return (
    <SafeAreaView style={styles.page}>
      <View style={{height: '17%'}}>
        <Return nav={navigation} />
        <View style={styles.filter}>
          <Text style={styles.filter.text}>{params}</Text>
          <DropDownPicker
            items={[
              { label: 'Newest', value: 'newest' },
              { label: 'Likes', value: 'likes' },
            ]}
            open={open}
            containerStyle={{ minWidth: 100, maxWidth: 200 }}
            value={pickerValue}
            setValue={setPickerValue}
            setOpen={setOpen}
            placeholder='-'
          />
        </View>
      </View>
      
      {!open && (
        <View style={styles.orderedList}>
          <FlatList 
            data={filteredPosts}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            renderItem={renderCard}
            keyExtractor={({id}) => id}
          />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    text: {
      color: 'white',
      fontSize: 20,
      fontWeight: 700,
      marginRight: 20
    },
    selector: {
      backgroundColor: 'red',
      width: 100,
      heigh: 100,
    }
  },
  orderedList: {
    height: '87%',
    alignItems: 'center',
    flexGrow: 1,
  }
})

export default SearchByTag;
