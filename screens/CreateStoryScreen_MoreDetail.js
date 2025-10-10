import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import { Filigree2, Filigree4, Filigree5_Bottom, Filigree5_Top } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { Svg, Rect, Path } from 'react-native-svg';

const CreateStoryHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.creationHeader}>
            <TouchableOpacity style={styles.ch_button}
                onPress={() => navigation.goBack()}
            >
                <MaterialIcons name='arrow-back' color={colors.white} size={30} />
            </TouchableOpacity>

            <View style={styles.ch_textContainer}>
                <Text style={styles.ch_text}>
                    Thông Tin Truyện
                </Text>
            </View>

            <TouchableOpacity style={styles.ch_button}
                onPress={() => navigation.navigate("CreateStoryScreen_Page")}
            >
                <Text style={[styles.ch_buttonText, { fontWeight: 'normal' }]}>
                    Tiếp
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

const GenrePickerComponent = ({ genre, setGenreList, genreList }) => {
    const [active, setActive] = useState(false);

    const handlePickingGenre = (genre) => {
        setActive(!active)
        if (!active) {
            setGenreList([...genreList, genre])
        } else {
            setGenreList(genreList.filter(item => item != genre))
        }
    }
    return (
        <TouchableOpacity style={[styles.genrePickerComponent, active && styles.gpc_activeColor, active && { width: '105%', paddingHorizontal: 22 }]}
            activeOpacity={1}
            onPress={() => { handlePickingGenre(genre) }}
        >
            <View style={[styles.gpc_decoration, active && { backgroundColor: colors.gold }]} />
            <Text style={[styles.gpc_text, active && styles.gpc_activeColor]}>
                {genre}
            </Text>
            {/* <Svg style={styles.gpc_diamond} width="30" height="30" viewBox="0 0 30 30" fill="none">
                <Rect
                    x="14.6569"
                    y="2.46458"
                    width="17.7279"
                    height="17.7279"
                    transform="rotate(45 14.6569 2.46458)"
                    fill={active ? colors.black : colors.gray}
                    stroke={active ? colors.white : colors.lightgray}
                    strokeWidth="3"
                />
            </Svg>
            {active && <Svg style={styles.gpc_checkmark} width="36" height="27" viewBox="0 0 36 27" fill="none">
                <Path
                    d="M35.3261 3.41923L12.4194 26.3263L9.07937 22.9725L6.43948 20.3462L1.99713 15.8898C0.346014 14.2389 0.346013 11.5615 1.99713 9.90973C3.64845 8.25882 6.32592 8.25882 7.97725 9.90973L12.4264 14.3595L23.3663 3.41923C26.6689 0.11658 32.0234 0.11658 35.3261 3.41923Z"
                    fill={colors.gold}
                />
            </Svg>} */}
        </TouchableOpacity>
    )
}

const CreateStoryScreen_MoreDetail = () => {
    const [authorIsAccount, setAuthorIsAccount] = useState(true);
    const [author, setAuthor] = useState(null);
    const [genreList, setGenreList] = useState([]);
    const [openGenreList, setOpenGenreList] = useState(true);

    const genreDatabase = require('../assets/_genreDatabase.json');

    return (
        <View style={styles.container}>
            <CreateStoryHeader />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <TouchableOpacity activeOpacity={1}
                    style={{ marginTop: 15, zIndex: 99 }}
                    onPress={() => {
                        setAuthorIsAccount(!authorIsAccount)
                    }}
                >
                    <OrnateOption ButtonText={"Đây Là Sáng Tác Của Bạn"} Active={authorIsAccount} />
                </TouchableOpacity>

                {
                    !authorIsAccount ?
                        <View style={[styles.ornateTextbox, { marginTop: 0 }]}>
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
                                    <Text style={[styles.ot_textInputLabel, (author == null || author == '') && { color: colors.gray }]}>Tác Giả</Text>
                                    <TextInput style={styles.ot_textInput}
                                        placeholder='Tác Giả'
                                        placeholderTextColor={colors.lightgray}
                                        onChangeText={(text) => setAuthor(text)}
                                        value={author}
                                    />
                                </View>
                            </View>
                        </View>
                        :
                        <View style={{ width: '100%', height: 3, backgroundColor: colors.lightgray }} />
                }

                <View style={[styles.ornateTextbox, !authorIsAccount && { marginTop: 5 }, authorIsAccount && { marginTop: 15 }]}>
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
                    <Filigree5_Top customColor={colors.lightgray} />
                    <Filigree5_Bottom customColor={colors.lightgray} />

                    <View style={styles.ot_container}>
                        <View style={[styles.ot_fieldContainer, { marginTop: 20 }]}>
                            {

                                <Text style={styles.ot_textInputLabel}>
                                    {genreList.length != 0 && 'Thể Loại'}
                                </Text>
                            }
                            <TouchableOpacity style={styles.ot_textInput}
                            // onPress={() => setOpenGenreList(!openGenreList)}
                            >
                                {
                                    genreList.length == 0 &&
                                    <Text style={{ color: colors.lightgray, marginVertical: 7 }}>
                                        Thể Loại
                                    </Text>
                                }
                                {
                                    genreList.map(
                                        (genre) => <GenreComponent key={genre}
                                            genre={genre}

                                        />
                                    )
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.genrePicker}>
                            {
                                openGenreList &&
                                genreDatabase.map((genre) =>
                                    <GenrePickerComponent key={genre.name} genre={genre.name}
                                        genreList={genreList}
                                        setGenreList={setGenreList}
                                    />
                                )
                            }
                        </View>
                    </View>
                </View>

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
        marginVertical: 10,

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
        paddingBottom: 30,
        width: '90%',
        height: 'auto'
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
        marginTop: 12
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

    //-------------------------------------------------------//
    // GENRE COMPONENT

    genreComponent: {
        width: 'auto',
        padding: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        marginVertical: 2,

        borderRadius: 4,

        backgroundColor: colors.black,
    },
    gc_text: {
        color: colors.white,
        fontWeight: 'bold'
    },

    //-------------------------------------------------------//
    // GENRE PICKER COMPONENT
    genrePicker: {
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '90%',
        marginTop: 10
    },

    genrePickerComponent: {
        flexDirection: 'row',
        alignItems: 'center',

        width: '100%',
        padding: 15,
        paddingHorizontal: 15,
        marginRight: 5,
        marginTop: 8,

        borderRadius: 4,

        backgroundColor: colors.gray,
        borderColor: colors.lightgray,
        borderWidth: 1,
        borderLeftWidth: 3,
        borderRightWidth: 3,
    },
    gpc_activeColor: {
        color: colors.white,
        borderColor: colors.gold,
        backgroundColor: colors.black
    },
    gpc_text: {
        color: colors.lightgray,
        fontWeight: 'bold'
    },
    gpc_diamond: {
        position: 'absolute',
        right: -17
    },
    gpc_checkmark: {
        position: 'absolute',
        right: -25,
        top: 5
    },
    gpc_decoration: {
        height: '100%',
        width: 6,
        borderRadius: 4,
        backgroundColor: colors.lightgray,
        marginRight: 10
    }

});

export default CreateStoryScreen_MoreDetail;