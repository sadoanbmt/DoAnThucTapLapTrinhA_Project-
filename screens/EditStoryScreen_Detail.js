import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import { Filigree2, Filigree4, Filigree5_Bottom } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import MaterialIcons from '@react-native-vector-icons/material-icons';

import { setCreateStoryScreen_Page_Mode, setChapterToEdit } from '../slices/creationSlice';

const CreateStoryHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.creationHeader}>
            <TouchableOpacity style={styles.ch_button}
                onPress={() => navigation.navigate("CreateStoryScreen_Main")}
            >
                <MaterialIcons name='arrow-back' color={colors.white} size={30} />
            </TouchableOpacity>

            <View style={styles.ch_textContainer}>
                <Text style={styles.ch_text}>
                    Sửa Truyện
                </Text>
            </View>

            <TouchableOpacity style={styles.ch_button}>
                <Text style={[styles.ch_buttonText, { fontWeight: 'normal' }]}>
                    {/* Bỏ Qua */}
                </Text>
            </TouchableOpacity>
            <LinearGradient
                colors={[colors.black, 'transparent']}
                style={[globalStyles.shadow, globalStyles.bottomShadow, { bottom: -13, height: 13, opacity: 0.4 }]}
            />
        </View>
    )
}
const GenreComponent = ({ genre }) => {
    return (
        <View style={styles.genreComponent}>
            <Text style={styles.gc_text}>
                {genre}
            </Text>
        </View>
    )
}

const ChapterComponent = ({ navigation, chapter }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.ornateTextbox_white}
            onPress={() => {
                dispatch(setCreateStoryScreen_Page_Mode("updateChapter"))
                dispatch(setChapterToEdit(chapter))
                navigation.navigate("CreateStoryScreen_Page")
            }}
        >
            <View>
                <View style={styles.otw_textRow}>
                    <Text style={styles.otw_title} numberOfLines={1}>
                        Chương {chapter.chapterNum}: {chapter.chapterTitle}
                    </Text>
                    <MaterialIcons name='border-color' size={18} color={colors.gray} />
                </View>
                <View style={styles.otw_textRow}>
                    <Text style={styles.otw_subtitle}>Cập nhật ngày {chapter.lastUpdateDate}</Text>
                </View>
            </View>
            <Filigree5_Bottom />
            <LinearGradient
                colors={['rgba(0,0,0,0.2)', 'transparent']}
                style={[globalStyles.shadow, globalStyles.topShadow]}
            />
        </TouchableOpacity>
    )
}

const EditStoryScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const selectedCreationId = useSelector(
        (state) => state.books.selectedCreationId
    );

    const selectedCreation = useSelector(
        (state) => state.books.bookDatabase.find((book) => book.bookId == selectedCreationId)
    );
    const chaptersOfSelectedCreation = useSelector(
        (state) => state.books.chapterDatabase.filter((chapter) => chapter.bookId == selectedCreationId)
    );

    const [type, setType] = useState(selectedCreation.type);
    const [title, setTitle] = useState(selectedCreation.title);
    const [series, setSeries] = useState(selectedCreation.series);
    const [genreList, setGenreList] = useState(selectedCreation.genreList);
    const [description, setDescription] = useState(selectedCreation.description);

    return (
        <View style={styles.container}>
            <CreateStoryHeader />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>

                <View style={[styles.ornateTextbox_2, { marginTop: 10 }]}>
                    <Filigree4 customBottomPosition={0} customOpacity={0.12} />

                    <View style={styles.ot2_container}>
                        <View style={styles.ot_pictureFrame}>
                            <Image source={require('../assets/sunlessSkies.jpg')}
                                style={styles.ot_coverImage}
                            />
                            {/* <MaterialIcons name="add" size={30} color={colors.white} /> */}
                        </View>

                        <Text style={styles.ot_text}>
                            Sửa Ảnh Bìa
                        </Text>
                    </View>

                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[globalStyles.shadow, globalStyles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[globalStyles.shadow, globalStyles.rightShadow]}
                    />
                </View>

                <View style={styles.ornateTextbox}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[globalStyles.shadow, globalStyles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[globalStyles.shadow, globalStyles.rightShadow]}
                    />
                    <Filigree5_Bottom customColor={colors.lightgray} />

                    <View style={styles.ot_container}>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel,
                            (title == null || title == '') && { color: colors.gray }
                            ]}>
                                Tựa Đề
                            </Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Tựa Đề'
                                placeholderTextColor={colors.lightgray}
                                onChangeText={(text) => setTitle(text)}
                                value={title}
                            />
                        </View>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel,
                            (series == null || series == '') && { color: colors.gray }
                            ]}>
                                Series
                            </Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Series'
                                placeholderTextColor={colors.lightgray}
                                onChangeText={(text) => setSeries(text)}
                                value={series}
                            />
                        </View>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel,
                            (description == null || description == '') && { color: colors.gray }
                            ]}>
                                Mô Tả
                            </Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Mô Tả'
                                placeholderTextColor={colors.lightgray}
                                multiline={true}
                                textAlignVertical="top"
                                onChangeText={(text) => setDescription(text)}
                                value={description}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.ornateTextbox}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={[colors.black, 'transparent']}
                        style={[globalStyles.shadow, globalStyles.leftShadow]}
                    />
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['transparent', colors.black]}
                        style={[globalStyles.shadow, globalStyles.rightShadow]}
                    />
                    <Filigree5_Bottom customColor={colors.lightgray} />

                    <View style={styles.ot_container}>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel,
                            (genreList != null && genreList.length == 0) && { color: colors.gray }
                            ]}>
                                Thể Loại
                            </Text>
                            <View style={styles.ot_textInput}>
                                {
                                    (genreList != null && genreList.length == 0) &&
                                    <Text style={
                                        { color: colors.lightgray, marginTop: 5 }
                                    }>
                                        Thể Loại
                                    </Text>
                                }
                                {
                                    genreList.map(
                                        (genre) =>
                                            <GenreComponent key={genre} genre={genre} />
                                    )
                                }
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>MỤC LỤC</Text>
                </View>
                <View style={styles.chapterContainer}>
                    {
                        chaptersOfSelectedCreation != null &&
                        chaptersOfSelectedCreation.map((chapter) =>
                            <ChapterComponent chapter={chapter}
                                key={chapter.chapterId}
                                navigation={navigation}
                            />
                        )
                    }
                </View>

                <TouchableOpacity style={{ marginVertical: 0 }}
                    onPress={() => {
                        dispatch(setCreateStoryScreen_Page_Mode("newChapter"))
                        navigation.navigate("CreateStoryScreen_Page")
                    }}
                >
                    <OrnateButton ButtonText={"Thêm Chương Mới"} ButtonIcon={"add"} />
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

    ch_button: {
        flex: 1,
        paddingHorizontal: 20
    },

    ch_buttonText: {
        textAlign: 'right',
        color: colors.white,
        fontWeight: "bold"
    },

    ch_textContainer: {
        flex: 4
    },

    ch_text: {
        textAlign: 'left',
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1.2
    },

    //-------------------------------------------------------//
    // ORNATE TEXTBOX

    ornateTextbox: {
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: '100%',
        height: 'auto',
        marginVertical: 5,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },
    ot_container: {
        flexDirection: 'collumn',
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 20,
        paddingBottom: 50,
        width: '90%',
        height: 'auto'
    },
    ot_pictureFrame: {
        alignItems: 'center',
        justifyContent: 'center',

        width: 100,
        height: 150,

        borderRadius: 4,

        borderColor: colors.lightgray,
        borderWidth: 1,
        backgroundColor: colors.gray
    },
    ot_text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',

        marginLeft: 10,
        marginBottom: 10
    },
    ot_fieldContainer: {
        width: '100%',

        marginTop: 20
    },
    ot_textInputLabel: {
        color: colors.gold,
        fontSize: 11,
        fontWeight: 'bold'
    },
    ot_textInput: {
        flexDirection: 'row',
        flexWrap: 'wrap',

        width: '100%',
        padding: 5,
        paddingTop: 0,
        margin: 0,

        color: colors.white,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1
    },
    ot_coverImage: {
        width: '100%',
        height: '100%',

        borderRadius: 4
    },

    //-------------------------------------------------------//
    // GENRE COMPONENT

    genreComponent: {
        width: 'auto',
        padding: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        marginTop: 5,

        borderRadius: 4,

        backgroundColor: colors.black,
    },
    gc_text: {
        color: colors.white,
        fontWeight: 'bold'
    },

    //-------------------------------------------------------//
    // ORNATE TEXTBOX 2

    ornateTextbox_2: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 180,
        marginTop: 5,
        marginBottom: 5,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 3,
        borderBottomWidth: 2,
        backgroundColor: colors.gray,
    },
    ot2_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        paddingHorizontal: 15,
        width: '80%'
    },

    //-------------------------------------------------------//
    // TITLE CONTAINER

    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',

        width: '100%',
        height: 60,
        paddingHorizontal: 40
    },

    title: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        letterSpacing: 2
    },

    //-------------------------------------------------------//
    // ORNATE TEXTBOX WHITE

    ornateTextbox_white: {
        alignItems: 'center',
        justifyContent: 'flex-start',

        width: '100%',
        height: 80,
        marginVertical: 2,
        paddingVertical: 10,

        overflow: 'hidden',

        borderColor: colors.white,
        borderTopWidth: 2,
        backgroundColor: colors.white,
    },
    otw_textRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '100%',
        paddingHorizontal: 45
    },
    otw_title: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.4,
        color: colors.black,
        width: '100%'
    },
    otw_subtitle: {
        fontSize: 13,
        fontStyle: 'italic',
        color: colors.gray
    }
});

export default EditStoryScreen;