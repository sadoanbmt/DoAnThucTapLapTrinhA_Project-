import React from 'react';
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Rect, Path } from 'react-native-svg';

import { colors } from '../GlobalStyle';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export const DecoButton = ({ ButtonText, ButtonIcon }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 193);
    const svgHeight = 35;

    return (
        <View style={styles.container}>
            <View style={styles.buttonContext}>
                {
                    ButtonIcon != null ?
                        <MaterialIcons name={ButtonIcon}
                            color={colors.lightgray}
                            size={20}
                            style={{ marginRight: 10 }}
                        />
                        : <MaterialIcons name='list'
                            color={colors.lightgray}
                            size={20}
                            style={{ marginRight: 10 }}
                        />
                }
                <Text style={styles.buttonText}>{ButtonText}</Text>
            </View>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 193 35"
            >
                <Rect
                    x="1"
                    y="1"
                    width="191"
                    height="33"
                    rx="16.5"
                    fill={colors.trueWhite}
                    stroke={colors.lightgray}
                    strokeWidth="2"
                />
                <Path
                    d="M3.5 7.5H188"
                    stroke={colors.lightgray}
                    strokeOpacity="0.5"
                />
                <Path
                    d="M3.5 27.5H188"
                    stroke={colors.lightgray}
                    strokeOpacity="0.5"
                />
            </Svg>
        </View>
    );
};

export const DecoButton_Dark = ({ ButtonText, ButtonIcon }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 193);
    const svgHeight = 35;

    return (
        <View style={styles.container}>
            <View style={styles.buttonContext}>
                {
                    ButtonIcon != null ?
                        <MaterialIcons name={ButtonIcon}
                            color={colors.lightgray}
                            size={20}
                            style={{ marginRight: 8 }}
                        />
                        : null
                }
                <Text style={styles.buttonText}>{ButtonText}</Text>
            </View>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 193 35"
            >
                <Rect
                    x="1"
                    y="1"
                    width="191"
                    height="33"
                    rx="16.5"
                    fill={colors.gray}
                    stroke={colors.lightgray}
                    strokeWidth="2"
                />
                <Path
                    d="M3.5 7.5H188"
                    stroke={colors.lightgray}
                    strokeOpacity="0.5"
                />
                <Path
                    d="M3.5 27.5H188"
                    stroke={colors.lightgray}
                    strokeOpacity="0.5"
                />
            </Svg>
        </View>
    );
};

export const DirectionButton_Left = ({ }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 63);
    const svgHeight = 31;

    return (
        <View style={styles.container}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 63 31"
            >
                <Path
                    d="M12.6772 5.16791e-06L3.26961e-09 15.5L12.6772 31L46 31L33.3228 15.5L46 5.61867e-06L12.6772 5.16791e-06Z"
                    fill={colors.gold}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41 15.5L53.6772 1.51174e-07L62.6772 2.58498e-07L50 15.5L62.6772 31L53.6772 31L41 15.5Z"
                    fill={colors.gold}
                />
            </Svg>
        </View>
    );
};

export const DirectionButton_Right = ({ }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 63);
    const svgHeight = 31;

    return (
        <View style={styles.container}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 63 31"
            >
                <Path
                    d="M50.0001 31L62.6772 15.5L50.0001 -1.10561e-06L16.6772 -4.01179e-06L29.3544 15.5L16.6772 31L50.0001 31Z"
                    fill={colors.gold}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.6772 15.5L9.00006 31L5.79554e-05 31L12.6772 15.5L6.10352e-05 -1.76018e-06L9.00006 -1.25945e-06L21.6772 15.5Z"
                    fill={colors.gold}
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //position: 'absolute',
        //bottom: -95,

        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 'auto'
    },
    buttonText: {
        color: colors.lightgray,
        fontWeight: 'light',
        letterSpacing: 3,
    },
    buttonContext: {
        position: 'absolute',
        zIndex: 99,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: 35,
    }
});

// export default DecoButton;