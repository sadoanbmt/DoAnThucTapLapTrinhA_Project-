import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors, globalStyles } from './GlobalStyle';
import { Filigree2, Filigree4, Filigree5_Bottom } from './Decorations/Filigree';
import { OrnateOption } from './Decorations/DecoButton';
import MaterialIcons from '@react-native-vector-icons/material-icons';

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
                onPress={() => navigation.navigate("CreateStoryScreen_MoreDetail")}
            >
                <Text style={[styles.ch_buttonText, { fontWeight: 'normal' }]}>
                    Tiếp
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const CreateStoryScreen_Detail = () => {

    const [storyType, setStoryType] = useState(0);
    const [title, setTitle] = useState(null);
    const [series, setSeries] = useState(null);
    const [description, setDescription] = useState(null);

    return (
        <View style={styles.container}>
            <CreateStoryHeader />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>

                <View style={styles.ornateTextbox_2}>
                    <Filigree4 customBottomPosition={0} customOpacity={0.12} />

                    <View style={styles.ot2_container}>
                        <View style={styles.ot_pictureFrame}>
                            <MaterialIcons name="add" size={30} color={colors.white} />
                        </View>

                        <Text style={styles.ot_text}>
                            Thêm Ảnh Bìa
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

                <View style={{ marginTop: 5 }}>
                    <TouchableOpacity style={{ zIndex: 2 }} activeOpacity={0.9}
                        onPress={() => {
                            setStoryType(0)
                        }}
                    >
                        <OrnateOption ButtonText="Truyện Tranh" Active={storyType == 0} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ zIndex: 1 }} activeOpacity={0.9}
                        onPress={() => {
                            setStoryType(1)
                        }}
                    >
                        <OrnateOption ButtonText="Sách Chữ" Active={storyType == 1} />
                    </TouchableOpacity>
                </View>
                <Filigree2 customPosition={50} />
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
        width: '100%',

        padding: 5,
        paddingTop: 0,

        margin: 0,

        color: colors.white,
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1
    },

    //-------------------------------------------------------//
    // ORNATE TEXTBOX

    ornateTextbox_2: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 180,
        marginTop: 10,
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
});

export default CreateStoryScreen_Detail;