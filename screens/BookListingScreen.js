import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Line } from 'react-native-svg';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree1, Filigree5_Bottom } from './Decorations/Filigree';
import { LinearGradient } from 'expo-linear-gradient';

const listOfBooks = [{
  title: 'A Game Of Thrones',
  author: 'George R.R Martin',
  cover: require('../assets/aGameOfThrones.jpg')
},
{
  title: 'A Clash Of Kings',
  author: 'George R.R Martin',
  cover: require('../assets/aClashOfKings.jpg')
},
{
  title: 'A Storm Of Swords',
  author: 'George R.R Martin',
  cover: require('../assets/aStormOfSwords.jpg')
},
{
  title: 'A Feast For Crows',
  author: 'George R.R Martin',
  cover: require('../assets/aFeastForCrows.jpg')
},
{
  title: 'A Dance With Dragons',
  author: 'George R.R Martin',
  cover: require('../assets/aDanceWithDragons.jpg')
},]

const BookType = ({ type }) => {
  return (
    <View style={styles.bt_container}>
      <Text style={styles.bt_text}>{type}</Text>
      <View style={styles.line} />
    </View>
  )
}

const BookListing = ({ title, listOfBooks }) => {
  if (listOfBooks == null || listOfBooks.length == 0) return (null);

  const navigation = useNavigation();
  const BookItem = ({ book }) => {
    if (book == null) return (null);
    return (
      <TouchableOpacity style={styles.bi_container}
        activeOpacity={1}
        onPress={() => navigation.navigate('BookDetailScreen')}
      >
        <View style={styles.bi_bookCover}>
          <Image
            source={book.cover}
            style={styles.bi_bookCoverImg}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.bi_bookTitle}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {book.title}
        </Text>
        <Text style={styles.bi_bookAuthor}
          numberOfLines={1}
          ellipsizeMode="tail">
          {book.author}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.bl_container}>
      <Filigree1 customPosition={-95} />
      <Filigree5_Bottom />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.4)', 'transparent']}
        style={[styles.shadow, styles.topShadow]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={[styles.shadow, styles.bottomShadow]}
      />
      <View style={styles.bl_header}>
        <Svg width={38} height={38 * 0.184} viewBox="0 0 45 7">
          <Circle
            cx="30"
            cy="3.5"
            r="3"
            fill={colors.black}
            stroke={colors.black}
          />
          <Line
            x1="30"
            y1="3.5"
            x2="0"
            y2="3.5"
            stroke={colors.black}
            strokeWidth="1"
          />
        </Svg>
        <Text style={styles.bl_headerText}>
          {title}
        </Text>
      </View>

      <FlatList
        data={listOfBooks}
        renderItem={(bookItem) => <BookItem book={bookItem.item} />}
        keyExtractor={bookItem => bookItem.title}
        horizontal={true}
        style={styles.bl_flatList}
      />
    </View>
  )
}

const BookListingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderMain />
      <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>

        <BookType type="TRUYỆN TRANH" />

        <BookListing title="MỚI CẬP NHẬT" listOfBooks={listOfBooks} />

        <BookListing title="NỔI BẬT" listOfBooks={listOfBooks} />

        <BookListing title="HÀNG ĐẦU" listOfBooks={listOfBooks} />

        <View style={styles.bottomPadding}>
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={[styles.shadow, styles.bottomShadow]}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  //-------------------------------------------------------//

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },

  //-------------------------------------------------------//
  // BOOK TYPE

  bt_container: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    zIndex: 9,

    width: '100%',
    paddingVertical: 10,
    marginTop: 20,

    backgroundColor: colors.gray,
  },
  bt_text: {
    color: colors.gold,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 17,

    marginLeft: 20
  },

  //-------------------------------------------------------//
  // BOOK LISTING

  bl_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    height: 300,
    width: '100%',
    marginBottom: 10,

    backgroundColor: colors.white,
    borderColor: colors.white,
    borderTopWidth: 2
  },
  bl_header: {
    zIndex: 999,

    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '100%',
    //paddingHorizontal: 20,
    marginVertical: 15,
  },
  bl_headerText: {
    color: colors.black,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 17,

    paddingHorizontal: 5,
  },
  bl_flatList: {
    height: '100%',
    marginHorizontal: 6,
  },

  //-------------------------------------------------------//
  // BOOK ITEM

  bi_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: "100%",
    width: 100,

    marginHorizontal: 5,
  },
  bi_bookCover: {
    height: 160,
    width: "100%",
    marginBottom: 10,

    borderRadius: 4,

    backgroundColor: 'white',

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bi_bookCoverImg: {
    width: "100%",
    height: '100%',
    borderRadius: 4,
  },
  bi_bookTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  bi_bookAuthor: {
    fontWeight: 'light',
    fontSize: 12,
    fontStyle: 'italic'
  },

  //-------------------------------------------------------//
  // GENERAL

  shadow: {
    position: 'absolute',
  },
  topShadow: {
    height: 70,
    width: '100%',
    top: 0,
    left: 0,
  },
  bottomShadow: {
    height: 150,
    width: '100%',
    bottom: 0,
    left: 0,
  },
  line: {
    position: 'absolute',
    top: -10,
    zIndex: 99,

    height: 2,
    width: '100%',

    backgroundColor: colors.gray
  },
  decoButton: {
    position: 'absolute',
    bottom: -17,
    zIndex: 999,
  },
  bottomPadding: {
    paddingBottom: 180
  }
});

export default BookListingScreen;