import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree1, Filigree2, Filigree3_Simple, Filigree5_Bottom } from './Decorations/Filigree';
import { DecoButton, DecoButton_Dark } from './Decorations/DecoButton';

import MaterialIcons from '@react-native-vector-icons/material-icons';

const theBook = {
    title: 'A Game Of Thrones',
    series: 'A Song of Ice & Fire',
    author: 'George R.R Martin',
    cover: require('../assets/aGameOfThrones.jpg'),
    genreList: ['Tiểu Thuyết', 'Hư Cấu', 'Huyền Ảo', 'Trưởng Thành', 'Hoàn Tất'],

    totalPage: 800,
    totalView: 67231,
    totalLike: 20189,

    description: 'A Clash of Kings là cuốn thứ hai trong số bảy tiểu thuyết được lên kế hoạch trong A Song of Ice and Fire của tác giả người Mỹ George RR Martin , một bộ truyện sử thi giả tưởng . Nó được xuất bản lần đầu tại Vương quốc Anh vào ngày 16 tháng 11 năm 1998; phiên bản đầu tiên tại Hoa Kỳ tiếp theo vào ngày 2 tháng 2 năm 1999. Giống như người tiền nhiệm của nó, A Game of Thrones , nó đã giành được Giải thưởng Locus (năm 1999) cho Tiểu thuyết hay nhất và được đề cử Giải thưởng Nebula (cũng vào năm 1999) cho Tiểu thuyết hay nhất. Vào tháng 5 năm 2005, Meisha Merlin đã phát hành một phiên bản giới hạn của tiểu thuyết, được minh họa đầy đủ bởi John Howe .',
    chapterList: ['Prolouge', 'Arya', 'Sansa', 'Tyrion', 'Arya', 'Jon']
}

const BookDetail = ({ }) => {
    const navigation = useNavigation();

    const BookGenre = ({ genre }) => {

        return (
            <TouchableOpacity style={styles.bg_container}
                onPress={() => navigation.navigate('SearchResultScreen')}
            >
                <Text style={styles.bg_text}>{genre}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.bd_container}>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.3)']}
                style={[styles.shadow, styles.bottomShadow, { height: 40 }]}
            />
            <View style={styles.bd_bookCover}>
                <Image source={theBook.cover}
                    style={styles.bd_bookCoverImg}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.bd_blurBg}>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.3)']}
                    style={[styles.shadow, styles.bottomShadow, { height: 40 }]}
                />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                    style={[styles.shadow, styles.topShadow, { height: 40 }]}
                />
                <Image source={theBook.cover}
                    style={styles.bd_blurBgImg}
                    resizeMode='cover'
                    blurRadius={5}
                />
            </View>
            <View style={styles.bd_detailContainer}>
                <Filigree5_Bottom />
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                    style={[styles.shadow, styles.topShadow, { height: 40 }]}
                />
                <View style={styles.bd_header}>
                    <Text style={styles.bd_headerText}>
                        {theBook.title}
                    </Text>
                </View>

                <TouchableOpacity style={styles.bd_series}
                    onPress={() => navigation.navigate('SearchResultScreen')}
                >
                    <MaterialIcons name="collections-bookmark"
                        color={colors.black}
                        size={15}
                        style={{ marginRight: 6 }}
                    />
                    <Text style={styles.bd_seriesText}>
                        {theBook.series}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bd_author}
                    onPress={() => navigation.navigate('SearchResultScreen')}
                >
                    <MaterialIcons name="create"
                        color={colors.black}
                        size={15}
                        style={{ marginRight: 6 }}
                    />
                    <Text style={styles.bd_authorText}>
                        {theBook.author}
                    </Text>
                </TouchableOpacity>

                <View style={styles.bd_genresContainer}>
                    {
                        theBook.genreList.map((genre) => (
                            <BookGenre key={genre} genre={genre} />
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const BookStat = ({ }) => {
    return (
        <View style={styles.bs_container}>
            <Filigree1 customPosition={-95} />

            <LinearGradient
                colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                style={[styles.shadow, styles.topShadow, { height: 25 }]}
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.3)']}
                style={[styles.shadow, styles.bottomShadow, { height: 25 }]}
            />

            <View style={styles.bs_info}>
                <Text style={styles.bs_number}>{theBook.totalPage}</Text>
                <Text style={styles.bs_text}>Trang</Text>
            </View>

            {
                theBook.chapterList != null &&

                <View style={styles.bs_info}>
                    <Text style={styles.bs_number}>{theBook.chapterList.length}</Text>
                    <Text style={styles.bs_text}>Chương</Text>
                </View>
            }

            <View style={styles.bs_info}>
                <Text style={styles.bs_number}>{formatCompactNumber(theBook.totalView)}</Text>
                <Text style={styles.bs_text}>Lượt Xem</Text>
            </View>

            <View style={styles.bs_info}>
                <Text style={styles.bs_number}>{formatCompactNumber(theBook.totalLike)}</Text>
                <Text style={styles.bs_text}>Lượt Thích</Text>
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

const MoreDetails = ({ }) => {
    const [option, setOption] = useState(1);

    return (
        <View style={styles.md_container}>
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.4)']}
                style={[styles.shadow, styles.bottomShadow, { top: -40, height: 40 }]}
            />
            <View style={styles.md_header}>
                <Filigree3_Simple customBottomPosition={-20} />
                <TouchableOpacity style={[styles.md_button, option == 1 && styles.md_button_Active]}
                    onPress={() => setOption(1)}
                >
                    <Text style={[styles.md_buttonText, option == 1 && styles.md_buttonText_Active]}>Giới Thiệu</Text>
                </TouchableOpacity>
                {
                    theBook.chapterList != null &&
                    <TouchableOpacity style={[styles.md_button, option == 2 && styles.md_button_Active]}
                        onPress={() => setOption(2)}
                    >
                        <Text style={[styles.md_buttonText, option == 2 && styles.md_buttonText_Active]}>D.s Chương</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity style={[styles.md_button, option == 3 && styles.md_button_Active]}
                    onPress={() => setOption(3)}
                >
                    <Text style={[styles.md_buttonText, option == 3 && styles.md_buttonText_Active]}>Tương Tự</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.md_content}>
                {option == 1 && <MoreDetailsOption1 />}
                {option == 2 && <MoreDetailsOption2 />}
                {option == 3 && <MoreDetailsOption3 />}
            </View>
        </View>
    )
}
const MoreDetailsOption1 = () => {
    return (
        <View style={styles.moreDetailsOption1}>
            <View style={styles.mdo_textBox}>
                <Text style={styles.md_contentText}>
                    {theBook.description}
                </Text>
            </View>
            <Filigree2 />
        </View>
    )
}
const MoreDetailsOption2 = () => {
    if (theBook.chapterList == null) return (null);
    const ChapterComponent = ({ index, chapterName }) => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity style={styles.cc_container}
                onPress={() => navigation.navigate("PageScreen")}
            >
                <View style={styles.cc_decor} />
                <Text style={styles.cc_text}>Chương {index + 1}: {chapterName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.moreDetailsOption2}>
            <Filigree2 />
            <View style={styles.mdo_textBox}>
                {
                    theBook.chapterList.map((chapterName, index) =>
                        <ChapterComponent index={index} chapterName={chapterName} />
                    )
                }
            </View>
        </View>
    )
}
const MoreDetailsOption3 = () => {
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

    return (
        <View>
            <BookListing title={"Tác Giả: " + theBook.author} listOfBooks={listOfBooks} />
            <BookListing title={"Series: " + theBook.series} listOfBooks={listOfBooks} />
            {
                theBook.genreList.slice(0, 3).map((genre) => (
                    <BookListing title={"Thể Loại: " + genre} listOfBooks={listOfBooks} />
                ))
            }
        </View>
    )
}
const BookListing = ({ title, listOfBooks }) => {
    if (listOfBooks == null) return (null);

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
            <Filigree1 style={styles.filigree} />
            <LinearGradient colors={['rgba(0, 0, 0, 0.3)', 'transparent']}
                style={[styles.shadow, styles.topShadow, { marginTop: 30, }]}
            />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.2)']}
                style={[styles.shadow, styles.bottomShadow]}
            />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']}
                style={[styles.shadow, styles.bottomShadow, { top: -30, height: 30 }]}
            />
            <View style={styles.bl_header}>
                <Text style={styles.bl_headerTitle}>
                    {title}
                </Text>
            </View>

            <FlatList
                data={listOfBooks}
                renderItem={(bookItem) => <BookItem book={bookItem.item} listOfBooks={listOfBooks} />}
                keyExtractor={bookItem => bookItem.title}
                horizontal={true}
                style={styles.bl_flatList}
            />

            <TouchableOpacity style={styles.decoButton_bl}
                activeOpacity={1}
                onPress={() => navigation.navigate('SearchResultScreen')}
            >
                <DecoButton ButtonText="XEM THÊM" />
            </TouchableOpacity>

        </View>
    )
}

const BookDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <BookDetail />

                <BookStat />

                <TouchableOpacity style={styles.decoButton}
                    activeOpacity={1}
                    onPress={() => navigation.navigate('PageScreen')}
                >
                    <DecoButton ButtonText="ĐỌC NGAY" ButtonIcon="import-contacts" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.decoButton}
                    activeOpacity={1}
                    onPress={() => navigation.navigate('PageScreen')}
                >
                    <DecoButton_Dark ButtonText="THƯ VIỆN" ButtonIcon="add" />
                </TouchableOpacity>

                <MoreDetails />
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
    // BOOK DETAIL

    bd_container: {
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: '100%',
        minHeight: 400,
        height: 'auto'

    },
    bd_bookCover: {
        position: 'absolute',
        zIndex: 999,
        top: 30,

        height: 250,
        width: 170,

        borderRadius: 6,
        backgroundColor: "white",
        elevation: 5
    },
    bd_bookCoverImg: {
        height: "100%",
        width: "100%",

        borderRadius: 6,
    },
    bd_blurBg: {
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'center',

        width: "100%",
        height: 240,

        backgroundColor: colors.black
    },
    bd_blurBgImg: {
        width: "120%",
        height: "120%",

        opacity: 0.5,
        marginBottom: 30,
    },
    bd_detailContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: "100%",
        height: 'auto',
        paddingTop: 45,
        paddingBottom: 10,

        borderRadius: 0,

        backgroundColor: colors.white,
        borderColor: colors.white,
        borderTopWidth: 2
    },
    bd_header: {
        alignItems: 'center',
        justifyContent: 'center',

        width: "80%",

        paddingBottom: 5,
    },
    bd_headerText: {
        textAlign: 'center',
        color: colors.gold,
        fontSize: 25,
        fontWeight: 'bold',
    },
    bd_author: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        width: "100%",
    },
    bd_authorText: {
        color: colors.black,
        fontSize: 14,
        fontWeight: 'light',
        fontStyle: 'italic',
        letterSpacing: 3
    },
    bd_series: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        width: "100%",
        marginBottom: 5
    },
    bd_seriesText: {
        color: colors.black,
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 2
    },
    bd_genresContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',

        width: '100%',
        height: 'max-content',
        marginTop: 5,
        marginBottom: 10,
        padding: 10,
    },

    //-------------------------------------------------------//
    // BOOK GENRE

    bg_container: {
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 4,
        margin: 2,

        backgroundColor: colors.black,
    },
    bg_text: {
        color: colors.white,
        fontWeight: 'bold'
    },

    //-------------------------------------------------------//
    // BOOK STATS

    bs_container: {
        justifyContent: 'center',
        alignItems: 'space-between',
        flexDirection: 'row',

        height: 70,
        width: '100%',
        marginBottom: 25,

        borderColor: colors.gold,
        borderBottomWidth: 2,
        borderTopWidth: 3,

        backgroundColor: colors.gray
    },
    bs_info: {
        zIndex: 99,

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        height: '100%',
    },
    bs_number: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    bs_text: {
        color: colors.lightgray
    },

    //-------------------------------------------------------//
    // MORE DETAIL

    md_container: {
        width: '100%',
        height: "max-content",
        marginTop: 15,
        marginBottom: 160,

        backgroundColor: colors.gray
    },
    md_header: {
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',

        width: '100%',
        height: 50,
    },
    md_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        height: '100%',

        borderColor: colors.gray,
        borderBottomWidth: 3,
        backgroundColor: colors.gray
    },
    md_buttonText: {
        color: colors.lightgray,
        fontWeight: 'light',
        letterSpacing: 1,
        fontSize: 13
    },
    md_buttonText_Active: {
        color: colors.gold,
        fontWeight: 'bold',
        letterSpacing: 2,
        fontSize: 14
    },
    md_button_Active: {
        borderColor: colors.gold,
        borderBottomWidth: 3,
        backgroundColor: colors.gray
    },
    md_content: {
        width: '100%',
        height: "max-content",
        paddingTop: 40,

        backgroundColor: colors.black
    },
    md_contentText: {
        color: colors.white,
        lineHeight: 25,
        fontSize: 14,
        textAlign: 'left',
    },
    mdo_textBox: {
        paddingHorizontal: 20,
    },

    //-------------------------------------------------------//
    // CHAPTER COMPONENT

    cc_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: "100%",
        padding: 15,
        paddingHorizontal: 20,
        marginBottom: 5,

        borderRadius: 4,

        backgroundColor: colors.gray,
    },
    cc_decor: {
        height: "100%",
        width: 5,
        marginRight: 10,

        borderRadius: 10,
        backgroundColor: colors.white
    },
    cc_text: {
        color: colors.white,
        fontWeight: 'bold'
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
    // GENERAL

    shadow: {
        position: 'absolute',
        zIndex: 1,
    },
    topShadow: {
        height: 70,
        width: '100%',
        top: 0,
        left: 0,
    },
    bottomShadow: {
        height: 170,
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
        // position: 'absolute',
        // bottom: ,
        zIndex: 999,

        marginVertical: 5
    },
    decoButton_bl: {
        position: 'absolute',
        bottom: -17,
        zIndex: 999,
    },
    bottomPadding: {
        paddingBottom: 120
    }
});

export default BookDetailScreen;