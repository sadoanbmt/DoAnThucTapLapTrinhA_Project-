import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import { Filigree2, Filigree4, Filigree5_Bottom, Filigree5_Top, Filigree8_BottomLeft, Filigree8_BottomRight, Filigree8_TopLeft, Filigree8_TopRight, Filigree9 } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const _presetCreation = {
    "type": "sách chữ",
    "title": "Sunless Skies",
    "author": "Võ Văn Việt",
    "series": "A Song of the Skies",
    "bookNum": 1,
    "cover": require("../assets/sunlessSkies.jpg"),
    "publishDate": "1996-08-06",
    "genreList": [
        "Kỳ ảo",
        "Chính trị",
        "Viễn tưởng"
    ],
    "totalPage": 694,
    "totalView": 0,
    "totalLike": 0,
    "totalChapter": 1,
    "description": "Năm 1970, Việt Nam bị bắt cóc và mang lên bầu trời bởi một con Cua. Kể từ đó người Việt bắt đầu thích nghi và khám phá một thế giới mới trên bầu trời. Nhân vật chính là một thuyền trưởng và thuyền của ông là một đầu máy xe lửa. Công việc của ông là giao hàng tới giữa các thuộc địa trên bầu trời, tham vọng của ông là phiêu lưu và chứng kiến mọi cái đẹp và cái đáng sợ của một thế giới mới.",
    "chapterList": [],
    "chapterContent": []
}

const CreateStoryHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.creationHeader}>
            <TouchableOpacity style={styles.csh_button}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name='arrow-back' color={colors.white} size={30} />
            </TouchableOpacity>

            <View style={styles.csh_textContainer}>
                <Text style={styles.csh_text}>
                    Sáng Tác Của Bạn
                </Text>
            </View>

            <TouchableOpacity style={styles.csh_button}>
                <Text style={[styles.csh_buttonText, { fontWeight: 'normal' }]}>
                    {/* Bỏ Qua */}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const BookItem_Wide = ({ navigation, book }) => {
    return (
        <View style={styles.bi_container}>
            <Filigree4
                customBottomPosition={-5}
                customLeftPosition={-25}
                customOpacity={0.1}
            />
            <LinearGradient
                colors={['rgba(0,0,0,0.2)', 'transparent']}
                style={[globalStyles.shadow, globalStyles.topShadow]}
            />

            <View style={styles.bi_bookCover}
                onPress={() => {
                    navigation.navigate("BookDetailScreen")
                }}
            >
                <Image source={book.cover}
                    style={styles.bi_bookCoverImg}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.bi_detailContainer}>
                <Text style={[styles.bi_bookTitle, { fontSize: 15, color: colors.white, letterSpacing: 0 }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    Tiếp tục soạn
                </Text>

                <Text style={styles.bi_bookTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {book.title}
                </Text>

                <View style={[styles.bi_row, { marginTop: 0 }]}>
                    <View style={{ padding: 5, paddingHorizontal: 15, borderRadius: 4, backgroundColor: colors.gold }}>
                        <Text style={[{ fontWeight: 'bold', color: colors.black, letterSpacing: 0 }]}>Chương 2</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: colors.lightgray, letterSpacing: 0, fontWeight: 'normal', fontSize: 15 }}>5 Bản nháp</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const CreationListingScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <CreateStoryHeader />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                {/* <ScreenTitle title={"ĐĂNG TRUYỆN"} icon={"edit-note"} /> */}

                <View style={{ marginTop: 15 }}>
                    <TouchableOpacity style={styles.currentCreationContainer}
                        onPress={() => navigation.navigate("EditStoryScreen")}
                    >
                        <BookItem_Wide navigation={navigation} book={_presetCreation} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.currentCreationContainer}
                        onPress={() => navigation.navigate("EditStoryScreen")}
                    >
                        <BookItem_Wide navigation={navigation} book={_presetCreation} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ marginTop: 5 }}
                    onPress={() => {
                        navigation.navigate("CreateStoryScreen_2")
                    }}
                >
                    <OrnateButton ButtonText={"Sáng Tác Truyện"} ButtonIcon={"edit-note"} />
                </TouchableOpacity>
                <Filigree2 customPosition={60} />
                <View style={globalStyles.bottomPadding} />
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
    // CREATION HEADER

    creationHeader: {
        zIndex: 999999,

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        paddingTop: 45,
        paddingBottom: 10,

        width: '100%',
        height: 'max-content',

        backgroundColor: colors.gray,
    },

    csh_button: {
        flex: 1,
        paddingHorizontal: 20
    },

    csh_buttonText: {
        textAlign: 'right',
        color: colors.white,
        fontWeight: "bold"
    },

    csh_textContainer: {
        flex: 4
    },

    csh_text: {
        textAlign: 'left',
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1.2
    },

    pictureFrame: {
        width: 200,
        height: 300,
        margin: 20,

        borderColor: colors.lightgray,
        borderWidth: 1
    },

    ornateTextbox: {
        width: '100%',
        height: 450,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },

    ornateTextbox_2: {
        width: '100%',
        height: 180,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },

    ornateTextbox_white: {
        width: '100%',
        height: 100,
        marginVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.white,
    },

    currentCreationContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: '100%',
        width: '100%',

        borderRadius: 4
    },
    bi_detailContainer: {
        justifyContent: 'center',
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
        fontSize: 20,

        marginVertical: 3,
    },
    bi_bookAuthor: {
        color: colors.white,
        fontWeight: 'light',
        fontStyle: 'italic',
        letterSpacing: 1,
        fontSize: 12,
    },
    bi_row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',
    },
});

export default CreationListingScreen;