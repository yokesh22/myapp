import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CategorySearchScreen from './../components/category-searchpage';
import TrendingSearchScreen from './../components/trending-search';
import RecommendSearchScreen from './../components/recommend-search';
import BottomSearchScreen from './../components/bottom-search';

const searchData = [
  'DataScience',
  'Writing',
  'Machine Learning',
  'Politics',
  'CryptoCurrency',
  'Money',
  'Business',
];

const trendingData = [
  {
    key: '01',
    authorname: 'Tom Cooper',
    title: 'Ukraine War, 14 December 2022',
    date: '1 day ago ~ 7 min read',
  },
  {
    key: '02',
    authorname: 'MicroSoft Design',
    title: 'Desiging a New Outlook Experience',
    date: '14 hours ago ~ 5 min read',
  },
  {
    key: '03',
    authorname: 'Chris Kernaghan in UX',
    title: 'Stop using user personas, and start talking to people',
    date: '22 hours ago ~ 3 min read',
  },
  {
    key: '04',
    authorname: 'David Hinckley',
    title: "Scott Shannon Steps Down, But He's Neither Gone Nor Forgotten ",
    date: '13 hours ago ~ 5 min read',
  },
  {
    key: '05',
    authorname: 'Frank Andrade',
    title:
      'I Spend 14 Days Testing ChatGPT. Here Are 3 Ways It Can Improve Your Everyday Life',
    date: '1 day ago ~ 6 min read',
  },
];

const recommendedData = [
  {
    key: '1',
    author: "fatfish in JavaScript",
    title: "Should All REST API's Use POST Request",
    date: 'Nov 8',
    length: '~ 10 min read',
    cat: 'Selected for you',
    img: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  },
  {
    key: '2',
    author: "Ben 'The Hask' Hosking in ITNEXT ",
    title: "The Difference Between The Clever Developer & The Wise Developer",
    date: 'Dec 30,2021',
    length: '~ 5 min read',
    cat: 'Based on your reading',
    img: 'https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg',
  },
  {
    key: '3',
    author: 'fatfish',
    title: 'As a Front-end Engineer: 10 Secrets about "[].reduce" You Must Know About',
    date: 'Nov 3',
    length: '~ 10 min read',
    cat: 'Popular on Medium',
    img: 'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
  },
  {
    key: '4',
    author: 'Yokesh in JS',
    title: 'I Lost a Job Opportunity Just Because of Promise.all',
    date: 'Nov 14',
    length: '~ 4 min read',
    cat: 'Selected for you',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png',
  },
  {
    key: '5',
    author: 'Melih Yumak in CodeX',
    title: 'NodeJs Developer RoadMao 2022',
    date: '2 days ago',
    length: '~ 3 min read',
    cat: 'Popular on Medium',
    img: 'https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.png',
  },
  
];

const bottomData = [
    {
        key: '1',
        img: "https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo.jpg",
        title: "Netflix Technology...",
        content: "Learn more about how Netflix designs, builds, and operates ou...",
    },
    {
        key: '2',
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        title: "Netanel Basal",
        content: "A frontEnd Tech Lead, blogger, and opem source maintainer. The...",
    },
    {
        key: '3',
        img: "https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",
        title: "Kai Wong",
        content: "7x Top writer in UX Design. UX, Data Viz, and Data.Author of Data...",
    },
    {
        key: '4',
        img: "https://i.pinimg.com/originals/25/6a/3e/256a3e415ceedbe9e99cba9e80929d28.jpg",
        title: "Scott H.Young",
        content: "Author of Wsj best selling book: Ultralearning www.scott...",
    },
    {
        key: '5',
        img: "https://www.designmantic.com/blog/wp-content/uploads/2016/07/Netflix-Revamps-Logo.jpg",
        title: "Netflix Technology...",
        content: "Learn more about how Netflix designs, builds, and operates ou...",
    }
];
const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container1}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 21}}>
            Explore
          </Text>
          <View style={styles.searchBar}>
            <Ionic
              style={{paddingLeft: 10}}
              name="search-outline"
              color="#7d7d7d"
              size={21}
            />
            <Text style={{color: '#7d7d7d', paddingLeft: 10}}>
              Search Medium
            </Text>
          </View>
          <FlatList
            horizontal
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={searchData}
            renderItem={({item}) => <CategorySearchScreen name={item} />}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.c2header}>
            <Feather name="trending-up" color="#edebeb" size={20} />
            <Text style={{color: '#edebeb', paddingLeft: 10}}>
              TRENDING ON MEDIUM
            </Text>
          </View>
          <View style={styles.c2body}>
            <FlatList
              scrollEnabled={false}
              data={trendingData}
              renderItem={({item}) => (
                <TrendingSearchScreen
                  no={item.key}
                  authorname={item.authorname}
                  title={item.title}
                  date={item.date}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.c2header}>
            <MaterialIcon
                style ={{paddingLeft:10}}
              name="note-multiple-outline"
              color="#edebeb"
              size={20}
            />
            <Text style={{color: '#edebeb', paddingLeft: 10}}>
              RECOMMENDED FOR YOU
            </Text>
          </View>
         <View style = {styles.c2body}>
         <FlatList
          scrollEnabled={false}
            data = {recommendedData}
            renderItem = {({item}) => (
                <RecommendSearchScreen author = {item.author} title = {item.title} img = {item.img} date = {item.date} length = {item.length} />
            )}
           />
         </View>
        </View>
        <View style={styles.container4}>
            <View style = {styles.c2header}>
                <Text style = {{color: '#edebeb'}}>WHO TO FOLLOW</Text>
            </View>
           <View>
           <FlatList
            horizontal
            // pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={bottomData}
            renderItem={({item}) =><BottomSearchScreen img = {item.img} title = {item.title} content = {item.content} /> }
          />
           </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'black',
  },

  container1: {
    flex: 0.2,
    backgroundColor: 'black',
    paddingTop: 35,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: '#7d7d7d',
  },
  container2: {
    flex: 2,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderColor: '#7d7d7d',
  },
  container3: {
    flex: 2,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderColor: '#7d7d7d',
  },
  container4: {
    flex: 1,
    backgroundColor: 'black',
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#262323',
    marginRight: 20,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },

  c2header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
//<BottomSearchScreen img = {item.img} title = {item.title} content = {item.content} />