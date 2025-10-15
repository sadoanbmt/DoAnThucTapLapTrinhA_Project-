import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";

import { colors } from './GlobalStyle';
import HeaderMain from './Components/HeaderMain';
import FooterMain from './Components/FooterMain';

import { Filigree2 } from './Decorations/Filigree';
import { } from './Decorations/DecoButton';
import ScreenTitle from './Components/ScreenTitle';

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderMain />
            <ScrollView
                bounces={false}
                overScrollMode="never"
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 60 }}
            >
                {/* Tiêu đề */}
                <ScreenTitle title={"THÔNG BÁO"} icon={"notifications"} />

                {/* Danh sách thông báo */}
                <View style={styles.notificationSection}>
                    <Text style={styles.sectionTitle}>Hôm nay</Text>
                    <TouchableOpacity style={styles.notificationItem}>
                        <Text style={styles.notificationText}>Hệ Thống Giao Diện Mới</Text>
                    </TouchableOpacity>

                    <Text style={styles.sectionTitle}>9/29</Text>
                    <TouchableOpacity style={styles.notificationItem}>
                        <Text style={styles.notificationText}>Truyện A Clash Of Kings cập nhật</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.notificationItem}>
                        <Text style={styles.notificationText}>Truyện A Storm Of Storms cập nhật</Text>
                    </TouchableOpacity>
                </View>

                {/* Trang trí cuối */}
                <Filigree2 />
            </ScrollView>
            <FooterMain currentScreen={3}/>
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
    notificationSection: {
        width: '90%',
        marginTop: 20,
    },
    sectionTitle: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '600',
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
        paddingBottom: 4,
    },
    notificationItem: {
        backgroundColor: colors.gray,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginVertical: 4,
    },
    notificationText: {
        color: colors.white,
        fontSize: 14,
    },
});

export default NotificationScreen;