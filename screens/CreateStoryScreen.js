import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import { Filigree2, Filigree4, Filigree5_Bottom, Filigree5_Top, Filigree8_BottomLeft, Filigree8_BottomRight, Filigree8_TopLeft, Filigree8_TopRight, Filigree9 } from './Decorations/Filigree';
import { OrnateButton, OrnateOption } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';

const CreateStoryScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView bounces={false} overScrollMode="never" style={{ width: '100%' }}>
                <ScreenTitle title={"ĐĂNG TRUYỆN"} icon={"edit-note"} />

                <TouchableOpacity style={{ marginVertical: 10 }}
                    onPress={() => {
                        navigation.navigate("CreateStoryScreen_2")
                    }}
                >
                    <OrnateButton ButtonText={"Sáng Tác Truyện"} ButtonIcon={"edit-note"} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10 }}
                    onPress={() => {
                        navigation.navigate("EditStoryScreen")
                    }}
                >
                    <OrnateButton ButtonText={"Sửa Truyện"} ButtonIcon={"edit-note"} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginVertical: 10 }}

                >
                    <OrnateButton ButtonText={"Sáng Tác Của Bạn"} ButtonIcon={"list"} />
                </TouchableOpacity>

                <Filigree2 />
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
    shadow: {
        position: 'absolute',
    },
    topShadow: {
        height: "70%",
        width: '100%',
        top: 0,
        left: 0,
    },
    bottomShadow: {
        height: "50%",
        width: '100%',
        bottom: 0,
        left: 0,
    },
    leftShadow: {
        height: '100%',
        width: '10%',
        bottom: 0,
        left: 0,
    },
    rightShadow: {
        height: '100%',
        width: '10%',
        bottom: 0,
        right: 0,
    },
});

export default CreateStoryScreen;