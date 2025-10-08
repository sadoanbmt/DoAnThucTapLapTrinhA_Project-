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
                    Thông Tin Truyện
                </Text>
            </View>

            <TouchableOpacity style={styles.csh_button}
                onPress={() => navigation.navigate("CreateStoryScreen_4")}
            >
                <Text style={[styles.csh_buttonText, { fontWeight: 'normal' }]}>
                    Bỏ Qua
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const CreateStoryScreen_3 = () => {
    const navigation = useNavigation();
    const [authorIsAccount, setAuthorIsAccount] = useState(true);
    const [author, setAuthor] = useState(null);

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
                    !authorIsAccount &&
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
                                    placeholderTextColor={colors.white}
                                    onChangeText={(text) => setAuthor(text)}
                                    value={author}
                                />
                            </View>
                        </View>
                    </View>}

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
                    <Filigree5_Bottom customColor={colors.lightgray} />

                    <View style={styles.ot_container}>
                        <View style={styles.ot_fieldContainer}>
                            <Text style={[styles.ot_textInputLabel, (author == null || author == '') && { color: colors.gray }]}>Thể Loại</Text>
                            <TextInput style={styles.ot_textInput}
                                placeholder='Thể Loại'
                                placeholderTextColor={colors.white}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ height: 90 }}>
                    <Filigree2 customPosition={0} />
                </View>
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
        paddingBottom: 30,
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

        marginTop: 12
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
        borderBottomColor: colors.lightgray,
        borderBottomWidth: 1
    },

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
});

export default CreateStoryScreen_3;