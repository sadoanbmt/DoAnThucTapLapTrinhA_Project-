import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Line } from 'react-native-svg';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { BookList_Alt } from './Components/BookList';
import { LinearGradient } from 'expo-linear-gradient';

const bookDatabase = require('../assets/_bookDatabase.json');
const bookCover = {
  "../assets/aGameOfThrones.jpg": require("../assets/aGameOfThrones.jpg"),
  "../assets/aClashOfKings.jpg": require("../assets/aClashOfKings.jpg"),
  "../assets/aStormOfSwords.jpg": require("../assets/aStormOfSwords.jpg"),
  "../assets/aFeastForCrows.jpg": require("../assets/aFeastForCrows.jpg"),
  "../assets/aDanceWithDragons.jpg": require("../assets/aDanceWithDragons.jpg"),
  "../assets/fireAndBlood.jpg": require("../assets/fireAndBlood.jpg"),
  "../assets/theHobbit.jpg": require("../assets/theHobbit.jpg"),
  "../assets/theFellowshipOfTheRing.jpg": require("../assets/theFellowshipOfTheRing.jpg"),
  "../assets/theTwoTowers.jpg": require("../assets/theTwoTowers.jpg"),
  "../assets/theReturnOfTheKing.jpg": require("../assets/theReturnOfTheKing.jpg"),
  "../assets/harryPotter1.jpg": require("../assets/harryPotter1.jpg"),
  "../assets/harryPotter2.jpg": require("../assets/harryPotter2.jpg"),
  "../assets/harryPotter3.jpg": require("../assets/harryPotter3.jpg"),
  "../assets/harryPotter4.jpg": require("../assets/harryPotter4.jpg"),
  "../assets/harryPotter5.jpg": require("../assets/harryPotter5.jpg"),
  "../assets/harryPotter6.jpg": require("../assets/harryPotter6.jpg"),
  "../assets/harryPotter7.jpg": require("../assets/harryPotter7.jpg"),
  "../assets/dune1.jpg": require("../assets/dune1.jpg"),
  "../assets/dune2.jpg": require("../assets/dune2.jpg"),
  "../assets/dune3.jpg": require("../assets/dune3.jpg"),
  "../assets/dune4.jpg": require("../assets/dune4.jpg"),
  "../assets/dune5.jpg": require("../assets/dune5.jpg"),
  "../assets/dune6.jpg": require("../assets/dune6.jpg"),
}
const createRandomList = (array, count) => {
  return [...array]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

const BookType = ({ type }) => {
  return (
    <View style={styles.bt_container}>
      <Text style={styles.bt_text}>{type}</Text>
      <View style={styles.line} />
    </View>
  )
}

const BookListingScreen = ({ navigation }) => {
  const listOfBooksNewlyUpdated = createRandomList(bookDatabase, 10);
  const listOfBooksPopular = createRandomList(bookDatabase, 10);
  const listOfBooksTopRated = createRandomList(bookDatabase, 10);
  return (
    <View style={styles.container}>
      <HeaderMain />
      <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>

        <BookType type="TRUYỆN TRANH" />

        <BookList_Alt title="MỚI CẬP NHẬT" listOfBooks={listOfBooksNewlyUpdated} />

        <BookList_Alt title="NỔI BẬT" listOfBooks={listOfBooksPopular} />

        <BookList_Alt title="HÀNG ĐẦU" listOfBooks={listOfBooksTopRated} />

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