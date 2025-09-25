import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Line } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree1, Filigree5_Bottom } from './Decorations/Filigree';
import { DecoButton } from './Decorations/DecoButton';

const searchInfo = {
    searchType: 'Tìm kiếm:',
    search: 'A Clash Of Kings',
    searchResultBookType: 'Sách chữ',

    searchResultList_Book: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
    ],

    searchResultList_Comic: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },

    ],
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

const BookListing = ({ title, listOfBooks }) => {
    if (listOfBooks.length == 0) return (null);

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
                <Text style={styles.bi_bookTitle}>{book.title}</Text>
                <Text style={styles.bi_bookAuthor}>{book.author}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.bl_container}>
            <View style={styles.line} />
            <Filigree1 />
            <Filigree5_Bottom />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                style={[styles.shadow, styles.topShadow, { marginTop: 30, }]}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.2)']}
                style={[styles.shadow, styles.bottomShadow]}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                style={[styles.shadow, styles.bottomShadow, { top: -30, height: 30 }]}
            />
            <View style={styles.bl_header}>
                <Text style={styles.bl_headerTitle}>
                    {title}
                </Text>
            </View>

            <FlatList
                data={listOfBooks.splice(0, 6)}
                renderItem={(bookItem) => <BookItem book={bookItem.item} />}
                keyExtractor={bookItem => bookItem.id}
                horizontal={true}
                style={styles.bl_flatList}
            />

            <TouchableOpacity style={styles.decoButton}
                activeOpacity={1}
                onPress={() => navigation.navigate('SearchListingScreen')}
            >
                <DecoButton ButtonText="XEM THÊM" />
            </TouchableOpacity>

        </View>
    )
}

const SearchResultScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ResultCount />
                <BookListing title="TRUYỆN TRANH" listOfBooks={searchInfo.searchResultList_Comic} />
                <BookListing title="SÁCH CHỮ" listOfBooks={searchInfo.searchResultList_Book} />
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