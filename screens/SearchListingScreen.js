import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle, Line } from 'react-native-svg';
import MaterialIcons from '@react-native-vector-icons/material-icons';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree1, Filigree4 } from './Decorations/Filigree';
import { DirectionButton_Left, DirectionButton_Right } from './Decorations/DecoButton';

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
    searchType: 'Tìm kiếm: ',
    search: 'A Clash Of Kings',
    searchResultBookType: 'Sách chữ',

    searchResultList: bookDatabase
}

const ResultCount = () => {
    return (
        <View style={styles.rc_container}>
            <Text style={styles.rc_title}>
                {searchInfo.searchType}: {searchInfo.search}
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
                    {searchInfo.searchResultList.length} Kết quả trong {searchInfo.searchResultBookType}
                </Text>
            </View>
        </View>
    )
}

const ResultButton = ({ page, setPage, totalPage }) => {
    const movePage = (direction) => {
        let newPage = page + direction;
        if (newPage < 1 || newPage > totalPage) return;
        setPage(newPage);
    }
    return (
        <View style={styles.rb_container}>
            <View style={styles.line} />
            <Filigree1 customPosition={-95} />

            <View style={[styles.row, { justifyContent: 'center' }]}>
                <TouchableOpacity style={styles.rb_button}
                    onPress={() => movePage(-1)}
                >
                    <DirectionButton_Left />
                </TouchableOpacity>

                <Text style={styles.rb_text}>Trang {page} trên {totalPage}</Text>
                <TouchableOpacity style={styles.rb_button}
                    onPress={() => movePage(1)}>
                    <DirectionButton_Right />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ResultDisplay = ({ page }) => {
    const data = searchInfo.searchResultList.slice((page - 1) * 7, page * 7)
    const navigation = useNavigation();
    return (
        <View style={styles.rd_container}>
            {/* 
            <FlatList
                data={data}
                renderItem={({ item }) => <BookItem navigation={navigation} />}
                numColumns={2}
                scrollEnabled={false}
            />             */}

            <FlatList
                data={data}
                renderItem={(bookItem) => <BookItem_Wide navigation={navigation} book={bookItem.item} />}
                keyExtractor={bookItem => bookItem.id}
                scrollEnabled={false}
            />
        </View>
    )
}

const BookItem_Wide = ({ navigation, book }) => {
    return (
        <View style={styles.bi_container}>
            <Filigree4
                customBottomPosition={-10}
                customLeftPosition={-25}
                customOpacity={0.1}
            />
            <LinearGradient
                colors={['rgba(0,0,0,0.2)', 'transparent']}
                style={[styles.shadow, styles.topShadow]}
            />

            <TouchableOpacity style={styles.bi_bookCover}
                onPress={() => {
                    navigation.navigate("BookDetailScreen")
                }}
            >
                <Image source={bookCover[book.cover]}
                    style={styles.bi_bookCoverImg}
                    resizeMode='cover'
                />
            </TouchableOpacity>
            <View style={styles.bi_detailContainer}>
                <Text style={styles.bi_bookTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {book.title}
                </Text>
                <View style={styles.bi_row}>
                    <MaterialIcons name="collections-bookmark"
                        color={colors.white}
                        size={12}
                        style={{ marginRight: 6 }}
                    />
                    <Text style={styles.bi_bookAuthor}>{book.series}</Text>
                </View>

                <View style={[styles.bi_row, { marginTop: 10 }]}>
                    <MaterialIcons name="create"
                        color={colors.white}
                        size={12}
                        style={{ marginRight: 6 }}
                    />
                    <Text style={styles.bi_bookPage}>{book.author}</Text>
                </View>


                <View style={styles.bi_statContainer}>
                    <View style={styles.bi_stat}>
                        <Text style={styles.bi_statNum}>{formatCompactNumber(book.totalPage)}</Text>
                        <Text style={styles.bi_statText}>Trang</Text>
                    </View>
                    <View style={styles.bi_stat}>
                        <Text style={styles.bi_statNum}>{formatCompactNumber(book.totalView)}</Text>
                        <Text style={styles.bi_statText}>Lượt Xem</Text>
                    </View>
                    <View style={styles.bi_stat}>
                        <Text style={styles.bi_statNum}>{formatCompactNumber(book.totalLike)}</Text>
                        <Text style={styles.bi_statText}>Lượt Thích</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const formatCompactNumber = (number) => {
    if (typeof number !== 'number' || isNaN(number)) return 'Invalid';

    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + 'B';
    }
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    }
    if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    }
    return number.toString();
};
// const BookItem = ({ navigation }) => {
//     return (
//         <View style={styles.bi_container}>
//             <TouchableOpacity style={styles.bi_bookCover}
//                 onPress={() => {
//                     navigation.navigate("BookDetailScreen")
//                 }}
//             >
//             </TouchableOpacity>
//             <Text style={styles.bi_bookTitle}>Book Title</Text>
//             <Text style={styles.bi_bookAuthor}>Book Author</Text>
//             <Text style={styles.bi_bookPage}>1000 trang</Text>
//         </View>
//     )
// }

const SearchListingScreen = ({ navigation }) => {
    const [page, setPage] = useState(1);
    const totalPage = Math.ceil(searchInfo.searchResultList.length / 7);

    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never">
                <ResultCount />

                <ResultButton page={page}
                    setPage={setPage}
                    totalPage={totalPage}
                />

                <ResultDisplay page={page} />

                <ResultButton page={page}
                    setPage={setPage}
                    totalPage={totalPage}
                />

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
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',

        marginVertical: 5,
    },

    //-------------------------------------------------------//
    // RESULT COUNT

    rc_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',

        width: '100%',
        height: 90,
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
    // RESULTS DISPLAY

    rd_container: {
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        paddingVertical: 20,
        marginTop: 10,
    },

    //-------------------------------------------------------//
    // RESULT BUTTON

    rb_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',

    },
    rb_text: {
        color: colors.white
    },
    rb_button: {
        marginHorizontal: 20,
    },

    //-------------------------------------------------------//
    // BOOK ITEM

    bi_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',

        width: 320,
        height: 170,
        //paddingHorizontal: 10,
        //marginHorizontal: 20,
        marginVertical: 4,

        borderRadius: 4,

        backgroundColor: colors.gray,

        borderColor: colors.gray,
        borderTopWidth: 2
    },
    bi_bookCover: {
        height: 140,
        width: 90,
        marginLeft: 20,

        //borderRadius: 4,

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
        height: '100%',
        width: '100%'
    },
    bi_detailContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

        height: '100%',

        paddingVertical: 20,
        marginLeft: 15,
    },
    bi_bookTitle: {
        width: 190,
        flexWrap: 'wrap',
        color: colors.gold,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 14,

        marginTop: 8,
    },
    bi_bookAuthor: {
        color: colors.white,
        fontWeight: 'light',
        fontStyle: 'italic',
        letterSpacing: 1,
        fontSize: 12,
    },
    bi_bookPage: {
        color: colors.white,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 12,
    },
    bi_statContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: 170,
        marginTop: 15,
    },
    bi_stat: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        marginHorizontal: 5
    },
    bi_statNum: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.white
    },
    bi_statText: {
        fontSize: 11,
        color: colors.white
    },
    bi_row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',
    },

    // bi_container: {
    //     justifyContent: 'flex-start',
    //     alignItems: 'flex-start',

    //     width: 130,
    //     height: 270,
    //     marginHorizontal: 20,
    //     marginVertical: 15,
    // },
    // bi_bookCover: {
    //     height: 190,
    //     width: 130,
    //     marginBottom: 10,

    //     borderRadius: 4,

    //     backgroundColor: 'white',

    //     elevation: 5,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    // },
    // bi_bookTitle: {
    //     color: colors.white,
    //     fontWeight: 'bold',
    //     letterSpacing: 2,
    //     fontSize: 14,
    // },
    // bi_bookAuthor: {
    //     color: colors.white,
    //     fontWeight: 'light',
    //     fontStyle: 'italic',
    //     letterSpacing: 1,
    //     fontSize: 12,
    // },
    // bi_bookPage: {
    //     color: colors.white,
    //     fontWeight: 'bold',
    //     letterSpacing: 2,
    //     fontSize: 12,

    //     marginTop: 10
    // },

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
        height: 120,
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
        // position: 'absolute',
        // bottom: 0,
        paddingBottom: 120
    }
});

export default SearchListingScreen;