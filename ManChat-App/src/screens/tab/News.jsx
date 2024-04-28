import React, {useEffect, useState, useContext} from 'react';
import Context from '../../context/Context';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import { tags as allTags } from '../../mock';

import Card from '../../component/newsScreen/Card';
import HighLightCard from '../../component/newsScreen/HighLightCard';

function News() {
  const { user } = useContext(Context);
  const [tags, setTags] = useState({user: [], other: []});
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const notSelected = allTags.reduce((acc, cur) => {
      const checkIt = user.tags.includes(cur.name);
      !checkIt && acc.push(cur.name)
      return acc
    }, []);

    const selectedTags = (array) => {
      const newArray = [];
      for (let i = 0; i < array.length; i += 1) {
        const pair = {key: i, content: array[i]};
        newArray.push(pair);
      }
      return newArray;
    };

    const otherTags = (array) => {
      const pairs = [];
      for (let i = 0; i < array.length; i += 2) {
        const pair = {key: i, content: [array[i], array[i + 1]]};
        pairs.push(pair);
      }
      return pairs;
    };

    setTags({ 
      user: selectedTags(user.tags), 
      other: otherTags(notSelected)
    });
  }, [user.tags]);

  const renderCard = ({item}) => <Card data={item} />;
  const renderHighLightCard = ({item}) => <HighLightCard data={item} />;

  return (
    <SafeAreaView>
      <View style={styles.news}>
        <FlatList
          data={tags.other}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderCard}
          keyExtractor={({key}) => `Card-${key}`}

          ListHeaderComponent={
            <View>
              <Text style={styles.title}>Articles</Text>
              <Text style={styles.text}>Explore our newest expert articles below!</Text>
              <Text style={styles.subTitle}>Featured</Text>
              <FlatList 
                data={tags.user}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderHighLightCard}
                pagingEnabled={true}
                keyExtractor={({key}) => `MainCard-${key}`}

                // onEndReached={() => {
                //   const nextPage = currentPage + 1;
                //   const update = [...tags.user.slice(0, nextPage * 3)];
                //   setCurrentPage(nextPage);
                //   setTags(prev => ({...prev, user: update}));
                // }}
                // onEndReachedThreshold={0.5}
              />
              <Text style={styles.subTitle}>Find the Help you need!</Text>
            </View>
          }

        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  news: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    height: '100%',
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 6,
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: 200,
    marginBottom: 15,
  },
  subTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 15,
  },
})

export default News;