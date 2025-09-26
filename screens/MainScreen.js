import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree2, Filigree4 } from './Decorations/Filigree';
import { DecoButton } from './Decorations/DecoButton';
import BookList from './Components/BookList';

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
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Phrases = [
  "A mind needs books\nas a sword needs a whetstone.",
  "Knowledge is power.",
  "A room without a book\nis like a body without a soul.",
  "A book is a dream\nthat you hold in your hand.",
  "Never trust anyone who has\nnot brought a book with them.",
  "There is only one thing that\ncould replace a book: the next book.",
  "Books are the mirrors of the soul.",
  "There is no friend as loyal as a book."
]

const Catalogue = () => {
  const CatalogueList = createRandomList(bookDatabase, 10);
  const random = getRandomInt(0, Phrases.length - 1);

  const CatalogueRow_1 = CatalogueList.slice(0, 3);
  const CatalogueRow_2 = CatalogueList.slice(3, 7);
  const CatalogueRow_3 = CatalogueList.slice(7, 10);
  return (
    <View style={styles.c_container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={[styles.shadow, styles.topShadow, { zIndex: 999, top: 0, height: 40 }]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.3)']}
        style={[styles.shadow, styles.bottomShadow]}

      />
      <Text style={styles.c_text}>{Phrases[random]}</Text>

      <View style={[styles.c_row, { top: -45 }]}>
        {
          CatalogueRow_1.map((catalogue) => (
            <View style={styles.c_book} key={catalogue.title}>
              <Image
                source={bookCover[catalogue.cover]}
                style={styles.c_bookImg}
                resizeMode="cover"
              />
            </View>
          ))
        }
      </View>
      <View style={[styles.c_row]}>
        {
          CatalogueRow_2.map((catalogue) => (
            <View style={styles.c_book} key={catalogue.title}>
              <Image
                source={bookCover[catalogue.cover]}
                style={styles.c_bookImg}
                resizeMode="cover"
              />
            </View>
          ))
        }
      </View>
      <View style={[styles.c_row, { bottom: -45 }]}>
        {
          CatalogueRow_3.map((catalogue) => (
            <View style={styles.c_book} key={catalogue.id}>
              <Image
                source={bookCover[catalogue.cover]}
                style={styles.c_bookImg}
                resizeMode="cover"
              />
            </View>
          ))
        }
      </View>

    </View>
  )
}

const CurrentBook = ({ title, book }) => {
  if (book == null) return (null);

  const navigation = useNavigation();

  const currentPage = "Trang 2 ";
  const currentChapter = "| Chương 3 "
  const currentProgress = "| 10%"

  return (
    <View style={styles.cb_container}>
      <View style={styles.line} />
      <Filigree2 />
      <Filigree4
        customLeftPosition={-12}
        customBottomPosition={10}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.2)', 'transparent']}
        style={[styles.shadow, styles.topShadow, { marginTop: 20, }]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.2)']}
        style={[styles.shadow, styles.bottomShadow, { height: 130 }]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,1)']}
        style={[styles.shadow, styles.bottomShadow, { top: -40, height: 40 }]}
      />

      <View style={[styles.bl_header, { paddingLeft: 160 }]}>
        <Text style={styles.bl_headerTitle}>
          ĐANG ĐỌC
        </Text>
      </View>
      <TouchableOpacity style={styles.cb_bookCover}
        activeOpacity={1}
        onPress={() => navigation.navigate('PageScreen')}>
        <Image
          source={bookCover[book.cover]}
          style={styles.cb_bookCoverImg}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.cb_desContainer}>
        <Text style={styles.cb_desTitle}
          numberOfLines={4}
        >{book.title}</Text>
        <Text style={styles.cb_desAuthor}>{book.author}</Text>
        <Text style={styles.cb_desProgress}>{currentPage}{currentChapter}{currentProgress}</Text>
      </View>
      <TouchableOpacity style={styles.decoButton}
        activeOpacity={1}
        onPress={() => navigation.navigate('PageScreen')}
      >
        <DecoButton ButtonText="ĐỌC TIẾP" ButtonIcon="import-contacts" />
      </TouchableOpacity>
    </View>
  )
}

// const BookListing = ({ title, listOfBooks }) => {
//   if (listOfBooks == null) return (null);

//   const navigation = useNavigation();

//   const BookItem = ({ book }) => {
//     if (book == null) return (null);
//     return (
//       <TouchableOpacity style={styles.bi_container}
//         activeOpacity={1}
//         onPress={() => navigation.navigate('BookDetailScreen')}
//       >
//         <View style={styles.bi_bookCover}>
//           <Image
//             source={bookCover[book.cover]}
//             style={styles.bi_bookCoverImg}
//             resizeMode="cover"
//           />
//         </View>
//         <Text style={styles.bi_bookTitle}>{book.title}</Text>
//         <Text style={styles.bi_bookAuthor}>{book.author}</Text>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     <View style={styles.bl_container}>
//       <View style={styles.line} />
//       <Filigree1 />
//       <Filigree5_Bottom />
//       <LinearGradient
//         colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
//         style={[styles.shadow, styles.topShadow, { marginTop: 30, }]}
//       />
//       <LinearGradient
//         colors={['transparent', 'rgba(0,0,0,0.2)']}
//         style={[styles.shadow, styles.bottomShadow]}
//       />
//       <LinearGradient
//         colors={['transparent', 'rgba(0,0,0,1)']}
//         style={[styles.shadow, styles.bottomShadow, { top: -30, height: 30 }]}
//       />
//       <View style={styles.bl_header}>
//         <Text style={styles.bl_headerTitle}>
//           {title}
//         </Text>
//       </View>

//       <FlatList
//         data={listOfBooks}
//         renderItem={(bookItem) => <BookItem book={bookItem.item} />}
//         keyExtractor={bookItem => bookItem.title}
//         horizontal={true}
//         style={styles.bl_flatList}
//       />

//       <TouchableOpacity style={styles.decoButton}
//         activeOpacity={1}
//         onPress={() => navigation.navigate('BookListingScreen')}
//       >
//         <DecoButton ButtonText="XEM THÊM" />
//       </TouchableOpacity>

//     </View>
//   )
// }

const MainScreen = ({ navigation }) => {
  const listOfBooks = createRandomList(bookDatabase, 10);
  const listOfComics = createRandomList(bookDatabase, 10);
  const currentBook = bookDatabase.at(getRandomInt(0, bookDatabase.length - 1));

  return (
    <View style={styles.container}>
      <HeaderMain />
      <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>

        <Catalogue />
        <CurrentBook book={currentBook} />
        <BookList title="TRUYỆN TRANH" listOfBooks={listOfComics} />
        <BookList title="SÁCH CHỮ" listOfBooks={listOfBooks} />

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
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },

  //-------------------------------------------------------//
  // CATALOGUE

  c_container: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 450,
    width: "100%",

    overflow: 'hidden',
    backgroundColor: colors.black,
  },
  c_text: {
    position: "absolute",

    color: colors.white,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'light',
    letterSpacing: 3,
    lineHeight: 25
  },
  c_book: {
    width: "30%",
    height: "100%",
    marginHorizontal: 5,

    backgroundColor: colors.gray,
    opacity: 0.1,
  },
  c_bookImg: {
    width: "100%",
    height: "100%",
  },
  c_row: {
    position: "absolute",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    zIndex: -99,

    width: "100%",
    height: "40%",
    paddingVertical: 5,

    overflow: 'hidden',
    backgroundColor: colors.black,
  },

  //-------------------------------------------------------//
  // CURRENT BOOK

  cb_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    height: 220,
    width: '100%',
    marginBottom: 60,

    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 2
  },
  cb_bookCover: {
    position: 'absolute',
    zIndex: 999,
    left: 10,
    top: -30,
    height: 215,
    width: 130,

    borderRadius: 6,
    backgroundColor: "white",

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cb_bookCoverImg: {
    height: '100%',
    width: '100%',

    borderRadius: 6,
  },
  cb_desContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 9,

    width: '50%',
    height: '70%',
    marginLeft: '40%',
    paddingTop: 0,
  },
  cb_desTitle: {
    color: colors.black,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 17,
  },
  cb_desAuthor: {
    color: colors.black,
    fontWeight: 'light',
    fontStyle: 'italic',
    letterSpacing: 2,
    fontSize: 14,
  },
  cb_desProgress: {
    marginTop: 20,
    color: colors.black,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 12,
  },

  //-------------------------------------------------------//
  // BOOK LISTING

  bl_container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    // height: 320,
    width: '100%',
    marginBottom: 60,

    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 2
  },
  bl_header: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    zIndex: 9,

    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,

    backgroundColor: colors.gray,
  },
  bl_headerTitle: {
    color: colors.gold,
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 17,
  },
  bl_flatList: {
    // height: '100%',
    marginHorizontal: 6,
    marginVertical: 20,
  },

  //-------------------------------------------------------//
  // BOOK ITEM

  bi_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

    height: "100%",
    width: 150,
    marginHorizontal: 8,
    paddingBottom: 10
  },
  bi_bookCover: {
    height: 250,
    width: 150,
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
    paddingBottom: 120
  }
});

export default MainScreen;