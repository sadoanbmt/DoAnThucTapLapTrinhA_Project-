import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Line } from 'react-native-svg';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
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

const searchInfo = {
    searchType: 'Tìm kiếm:',
    search: 'A Clash Of Kings',
    searchResultBookType: 'Sách chữ',

    searchResultList_Book: bookDatabase.slice(0, 10),

    searchResultList_Comic: bookDatabase.slice(10, 20),
}

const ResultCount = () => {
    return (
        <View style={styles.rc_container}>
            <Text style={styles.rc_title}>
                {searchInfo.searchType} {searchInfo.search}
            </Text>
            <View style={styles.row}>
                <Svg width={40} height={40 * 0.184} viewBox="0 0 38 7">
                    <Circle
                        cx="34.5"
                        cy="3.5"
                        r="3"
                        fill={colors.gray}
                        stroke={colors.gray}
                    />
                    <Line
                        x1="33"
                        y1="3.5"
                        x2="0"
                        y2="3.5"
                        stroke={colors.gray}
                        strokeWidth="1"
                    />
                </Svg>
                <Text style={[styles.rc_subtitle, { marginLeft: 10 }]}>
                    {
                        searchInfo.searchResultList_Book.length +
                        searchInfo.searchResultList_Comic.length
                    } Kết quả
                </Text>
            </View>
        </View>
    )
}

const SearchResultScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ResultCount />
                <BookList title="TRUYỆN TRANH"
                    listOfBooks={searchInfo.searchResultList_Comic}
                    customDestination="SearchListingScreen"
                />
                <BookList title="SÁCH CHỮ"
                    listOfBooks={searchInfo.searchResultList_Book}
                    customDestination="SearchListingScreen"
                />
                {
                    (searchInfo.searchResultList_Comic.length != 0 && searchInfo.searchResultList_Book.length != 0) &&
                    <View style={styles.bottomPadding}>
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,1)']}
                            style={[styles.shadow, styles.bottomShadow]}
                        />
                    </View>}
            </ScrollView>
            {
                (searchInfo.searchResultList_Comic.length == 0 || searchInfo.searchResultList_Book.length == 0) &&
                <View style={styles.bottomPadding}>
                    <LinearGradient
                        colors={['transparent', 'rgba(0,0,0,1)']}
                        style={[styles.shadow, styles.bottomShadow]}
                    />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    //-------------------------------------------------------//

    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.black,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',

        marginVertical: 5,
    },

    //-------------------------------------------------------//

    rc_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        width: '100%',
        height: 100,
        paddingVertical: 10
    },
    rc_title: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',

        marginHorizontal: 25
    },
    rc_subtitle: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'light',
        letterSpacing: 1
    },

    //-------------------------------------------------------//
    // BOOK LISTING

    bl_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',

        height: 320,
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
        height: '100%',
        marginHorizontal: 6,
        marginVertical: 20,
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
        width: '100%',
        paddingBottom: 120
    }
});

export default SearchResultScreen;