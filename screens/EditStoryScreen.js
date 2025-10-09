import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree2, Filigree4, Filigree5_Bottom, Filigree5_Top, Filigree8_BottomLeft, Filigree8_BottomRight, Filigree8_TopLeft, Filigree8_TopRight, Filigree9 } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';
import MaterialIcons from '@react-native-vector-icons/material-icons';

const CreateStoryHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.CreateStoryHeaderContainer}>
            <TouchableOpacity style={styles.csh_button}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name='arrow-back' color={colors.white} size={30} />
            </TouchableOpacity>

            <View style={styles.csh_textContainer}>
                <Text style={styles.csh_text}>
                    Sửa Truyện
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

const _presetCreation = {
    "type": "sách chữ",
    "title": "Sunless Skies",
    "author": "Võ Văn Việt",
    "series": "A Song of the Skies",
    "bookNum": 1,
    "cover": "../assets/sunlessSkies.jpg",
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

const EditStoryScreen = () => {
    const navigation = useNavigation();

    const [storyType, setStoryType] = useState(0);
    const [title, setTitle] = useState(_presetCreation.title);
    const [series, setSeries] = useState(null);
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState(_presetCreation.description);

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
                            <Text style={[styles.ot_textInputLabel, (title == null || title == '') && { color: colors.gray }]}>Tựa Đề</Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Tựa Đề'
                                placeholderTextColor={colors.lightgray}
                                onChangeText={(text) => setTitle(text)}
                                value={title}
                            />
                        </View>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel, (series == null || series == '') && { color: colors.gray }]}>Series</Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Series'
                                placeholderTextColor={colors.lightgray}
                                onChangeText={(text) => setSeries(text)}
                                value={series}
                            />
                        </View>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel, (description == null || description == '') && { color: colors.gray }]}>Mô Tả</Text>
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
                            <Text style={[styles.ot_textInputLabel, (genre == null || genre == '') && { color: colors.gray }]}>Thể Loại</Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Thể Loại'
                                placeholderTextColor={colors.lightgray}
                                onChangeText={(text) => setGenre(text)}
                                value={genre}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>MỤC LỤC</Text>
                </View>

                <View style={styles.chapterContainer}>
                    <View style={styles.ornateTextbox_white}>
                        <View>
                            <View style={styles.otw_textRow}>
                                <Text style={styles.otw_title} numberOfLines={1}>Chương 2: Bran</Text>
                                <MaterialIcons name='border-color' size={18} color={colors.gray} />
                            </View>
                            <View style={styles.otw_textRow}>
                                <Text style={styles.otw_subtitle}>Cập nhật Hôm nay</Text>
                            </View>
                        </View>
                        <Filigree5_Bottom />
                        <LinearGradient
                            colors={['rgba(0,0,0,0.2)', 'transparent']}
                            style={[globalStyles.shadow, globalStyles.topShadow]}
                        />
                    </View>
                    <View style={styles.ornateTextbox_white}>
                        <View>
                            <View style={styles.otw_textRow}>
                                <Text style={styles.otw_title} numberOfLines={1}>Chương 1: Prologue</Text>
                                <MaterialIcons name='border-color' size={18} color={colors.gray} />
                            </View>
                            <View style={styles.otw_textRow}>
                                <Text style={styles.otw_subtitle}>Cập nhật Hôm qua</Text>
                            </View>
                        </View>
                        <Filigree5_Bottom />
                        <LinearGradient
                            colors={['rgba(0,0,0,0.2)', 'transparent']}
                            style={[globalStyles.shadow, globalStyles.topShadow]}
                        />
                    </View>
                </View>

                <TouchableOpacity style={{ marginVertical: 0 }}
                    onPress={() => {
                        navigation.navigate("CreateStoryScreen_4")
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

    CreateStoryHeaderContainer: {
        zIndex: 999999,

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        paddingTop: 45,
        paddingBottom: 10,

        width: '100%',
        height: 'max-content',

        backgroundColor: colors.gray,
        // borderColor: colors.black,
        // borderBottomWidth: 1
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

    ot_container: {
        flexDirection: 'collumn',
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 20,
        paddingBottom: 50,
        width: '80%',
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
        letterSpacing: 1.5,
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