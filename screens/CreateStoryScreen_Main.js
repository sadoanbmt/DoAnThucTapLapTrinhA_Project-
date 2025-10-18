import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree2, Filigree4 } from './Decorations/Filigree';
import { OrnateButton } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';
import FooterMain from './Components/FooterMain';
import { setUserCreation } from '../slices/bookSlice';

const BookItem = ({ book, chapterListLength }) => {
    return (
        <View style={styles.bi_container}>
            <Filigree4
                customBottomPosition={-5}
                customLeftPosition={-35}
                customOpacity={0.1}
            />
            <LinearGradient
                colors={[colors.black, 'transparent']}
                style={[globalStyles.shadow, globalStyles.topShadow, { opacity: 0.3, }]}
            />

            <View style={styles.bi_bookCover}>
                <Image source={book.cover}
                    style={styles.bi_bookCoverImg}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.bi_detailContainer}>
                <Text style={[styles.bi_bookTitle,
                { fontSize: 15, color: colors.white, letterSpacing: 0 }
                ]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    Tiếp tục soạn
                </Text>

                <Text style={styles.bi_bookTitle}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {book.title}
                </Text>

                <View style={[styles.bi_row]}>
                    <View style={{ padding: 5, paddingHorizontal: 15, borderRadius: 4, backgroundColor: colors.gold }}>
                        <Text style={{ color: colors.black, letterSpacing: 0, fontWeight: 'bold' }}>
                            {chapterListLength} Chương
                        </Text>
                    </View>
                    {/* <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: colors.lightgray, letterSpacing: 0, fontWeight: 'normal', fontSize: 15 }}>5 Bản nháp</Text>
                    </View> */}
                </View>
            </View>
        </View>
    )
}

const CreateStoryScreen_Main = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const selectedCreation = useSelector(
        (state) => state.books.selectedCreation
    );
    console.log(selectedCreation)
    const chaptersOfSelectedCreation = useSelector(
        (state) => state.books.chaptersOfSelectedCreation
    );
    const userCreationIdList = useSelector(
        (state) => state.account.creationIdList
    )

    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ScreenTitle title={"ĐĂNG TRUYỆN"} icon={"edit-note"} customIconPosition={-2} />
                {
                    selectedCreation != null &&
                    <TouchableOpacity style={styles.currentCreation}
                        onPress={() => {
                            dispatch(setUserCreation(selectedCreation.bookId))
                            navigation.navigate("EditStoryScreen")
                        }}
                    >
                        <BookItem navigation={navigation}
                            book={selectedCreation}
                            chapterListLength={chaptersOfSelectedCreation.length}
                        />
                    </TouchableOpacity>
                }

                <TouchableOpacity style={{ marginTop: 5 }}
                    onPress={() => {
                        navigation.navigate("CreateStoryScreen_Detail")
                    }}
                >
                    <OrnateButton ButtonText={"Sáng Tác Truyện"} ButtonIcon={"edit-note"} />
                </TouchableOpacity>

                {
                    selectedCreation != null &&
                    <TouchableOpacity style={{ marginTop: 5 }}
                        onPress={() => {
                            dispatch(setUserCreation(selectedCreation.bookId))
                            navigation.navigate("EditStoryScreen")
                        }}
                    >
                        <OrnateButton ButtonText={"Sửa Truyện"} ButtonIcon={"edit-note"} />
                    </TouchableOpacity>
                }

                <TouchableOpacity style={{ marginTop: 5 }}
                    onPress={() => {
                        navigation.navigate("CreationListingScreen")
                    }}
                >
                    <OrnateButton ButtonText={"Sáng Tác Của Bạn"} ButtonIcon={"list"} />
                </TouchableOpacity>

                <Filigree2 customPosition={-95} />
                {/* <View style={globalStyles.bottomPadding} /> */}
            </ScrollView>
            <FooterMain currentScreen={2} />
        </View >
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
    // ORNATE TEXTBOX

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

    //-------------------------------------------------------//
    // ORNATE TEXTBOX

    currentCreation: {
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

        width: 340,
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
        marginTop: 10
    },
});

export default CreateStoryScreen_Main;