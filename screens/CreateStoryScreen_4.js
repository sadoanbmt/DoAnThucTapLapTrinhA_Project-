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
                    Nội Dung Truyện
                </Text>
            </View>

            <TouchableOpacity style={styles.csh_button}
                onPress={() => navigation.navigate("EditStoryScreen")}
            >
                <Text style={[styles.csh_buttonText, { fontWeight: 'normal' }]}>
                    Đăng
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const CreateStoryScreen_4 = () => {
    const navigation = useNavigation();

    const [content, setContent] = useState('');

    return (
        <View style={styles.container}>
            <CreateStoryHeader />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <View style={styles.titleInputContainer}>
                    <TextInput style={styles.ti_input}
                        placeholder='Tựa Đề Chương'
                        placeholderTextColor={colors.lightgray}
                    />
                    <Filigree2 customPosition={-75} />
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
                    <Filigree5_Top customColor={colors.lightgray} />

                    <View style={styles.ot_container}>
                        <TextInput style={styles.ot_textInput}
                            placeholder='Bắt đầu viết'
                            placeholderTextColor={colors.lightgray}
                            onChangeText={(text) => setContent(text)}
                            value={content}
                            multiline={true}
                        />
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

    titleInputContainer:{
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 70,
    },

    ti_input:{
        width: 320,
        paddingTop: 10,
        marginTop: 5,

        color: colors.white,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',

        borderColor: colors.gray,
        borderTopWidth: 1.5,
    },

    ot_container: {
        flexDirection: 'collumn',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        paddingHorizontal: 35,
        paddingVertical: 40,
        width: '100%',
        height: '90%'
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
        color: colors.lightgray,
        fontSize: 11,
        fontWeight: 'bold'
    },

    ot_textInput: {
        width: '100%',
        padding: 5,
        paddingTop: 0,

        margin: 0,

        color: colors.white,

        lineHeight: 22
        // borderBottomColor: colors.lightgray,
        // borderBottomWidth: 1
    },

    ornateTextbox: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        width: '100%',
        height: 620,
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
});

export default CreateStoryScreen_4;