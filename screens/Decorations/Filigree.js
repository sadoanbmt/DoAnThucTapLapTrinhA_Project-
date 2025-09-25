import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Path, Rect, Line, Circle } from 'react-native-svg';

import { colors } from '../GlobalStyle';

export const Filigree1 = ({ customPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 370);
    const svgHeight = 88;

    const position = customPosition == null ? -110 : customPosition;

    return (
        <View style={[styles.filigree, { bottom: position }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 370 88"
            >
                <Line
                    x1="1"
                    y1="1"
                    x2="369"
                    y2="1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Line
                    x1="186"
                    y1="1"
                    x2="186"
                    y2="87"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Path
                    d="M250 2C250 34.0325 221.122 60 185.5 60C149.878 60 121 34.0325 121 2"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M186 29C186 13.536 197.193 0.999999 211 1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M237 37C262.5 0.999863 319.193 0.999755 333 0.999756"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M134 37.0002C108.5 1.00011 51.8071 0.999999 38 1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M186 29C186 13.536 174.807 0.999999 161 1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
            </Svg>
        </View>
    );
};
export const Filigree2 = ({ customPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 370);
    const svgHeight = 88;

    const position = customPosition == null ? -105 : customPosition;

    return (
        <View style={[styles.filigree, { bottom: position }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 394 88"
            >
                <Path
                    d="M197 87C197 40.9467 149.542 3 91 3"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                />
                <Rect
                    x="197"
                    y="11"
                    width="27"
                    height="27"
                    transform="rotate(45 197 11)"
                    fill={colors.gray}
                />
                <Line
                    x1="1"
                    y1="3"
                    x2="169"
                    y2="3.00001"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Circle
                    cx="171"
                    cy="3"
                    r="3"
                    fill={colors.gray}
                />
                <Circle
                    cx="197"
                    cy="19"
                    r="17"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M154 4V4C154 8.97056 158.029 13 163 13H181"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M197 87C197 40.9467 244.458 3 303 3"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                />
                <Line
                    x1="1"
                    y1="-1"
                    x2="169"
                    y2="-1"
                    transform="matrix(-1 8.74228e-08 8.74228e-08 1 394 4)"
                    stroke={colors.gray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Circle
                    cx="3"
                    cy="3"
                    r="3"
                    transform="matrix(-1 0 0 1 226 0)"
                    fill={colors.gray}
                />
                <Path
                    d="M240 4V4C240 8.97056 235.971 13 231 13H213"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
            </Svg>
        </View>
    );
};
export const Filigree3 = ({ customPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 370);
    const svgHeight = 29;

    const position = customPosition == null ? -29 : customPosition;

    return (
        <View style={[styles.filigree, { bottom: position }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 374 34"
            >
                <Path
                    d="M1 2V2C1 7.52285 5.47716 12 11 12H170"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M373 2V2C373 7.52285 368.523 12 363 12H205"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M347 13V13C347 18.5228 342.523 23 337 23H200"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M28 13V13C28 18.5228 32.4772 23 38 23H175"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M205 12C205 3.16344 213.059 1 223 1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M170 12C170 3.16344 161.941 1 152 1"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M201.946 1C203.873 3.77309 205 7.1263 205 10.7412C205 20.2607 197.177 28 187.5 28C177.823 28 170 20.2607 170 10.7412C170 7.1263 171.127 3.77309 173.054 1H201.946Z"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M198.707 3C200.155 5.14776 201 7.73331 201 10.5186C201 17.9629 194.957 24 187.5 24C180.043 24 174 17.9629 174 10.5186C174 7.73331 174.845 5.14776 176.293 3H198.707Z"
                    fill={colors.gray}
                    stroke={colors.gray}
                    strokeWidth="2"
                />
                <Line
                    x1="0"
                    y1="1"
                    x2="374"
                    y2="1"
                    stroke={colors.gray}
                    strokeWidth="2"
                />
            </Svg>
        </View>
    );
};
export const Filigree3_Simple = ({ customBottomPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 372);
    const svgHeight = 23;

    const positionBottom = customBottomPosition == null ? 0 : customBottomPosition;

    return (
        <View style={[styles.filigree, { bottom: positionBottom }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 372 23"
            >
                <Path
                    d="M370.953 1.4C370.448 7.00642 365.738 11.4 360 11.4H12C6.26202 11.4 1.55219 7.00641 1.04688 1.4H370.953Z"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M26 12V12C26 17.5228 30.4772 22 36 22H336C341.523 22 346 17.5228 346 12V12"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
            </Svg>
        </View>
    );
};
export const Filigree4 = ({ customBottomPosition, customLeftPosition, customOpacity }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width - 40, 233);
    const svgHeight = 200;

    const positionBottom = customBottomPosition == null ? 0 : customBottomPosition;
    const positionLeft = customBottomPosition == null ? 0 : customLeftPosition;
    const opacity = customOpacity == null ? 0.3 : customOpacity;

    return (
        <View style={[styles.filigree, { bottom: positionBottom, left: positionLeft, opacity: opacity }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 233 211"
            >
                <Circle
                    cx="72.5"
                    cy="130"
                    r="35.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M97 195.5C132.899 195.5 162 166.399 162 130.5C162 94.6015 132.899 65.5 97 65.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M73 94.5C86.8071 94.5 98 83.3071 98 69.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    fill="none"
                />
                <Path
                    d="M73 165.5C86.8071 165.5 98 176.693 98 190.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    fill="none"
                />
                <Circle
                    cx="72.5"
                    cy="130"
                    r="32"
                    stroke={colors.lightgray}
                    fill="none"
                />
                <Line
                    x1="108"
                    y1="129.5"
                    x2="232"
                    y2="129.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Line
                    x1="98"
                    y1="1"
                    x2="98"
                    y2="105"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Line
                    x1="98"
                    y1="155"
                    x2="98"
                    y2="210"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <Line
                    x1="1"
                    y1="129.5"
                    x2="36"
                    y2="129.5"
                    stroke={colors.lightgray}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </Svg>
        </View>
    );
};
export const Filigree5_Bottom = ({ customPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 394);
    const svgHeight = 200;

    const position = customPosition == null ? 0 : customPosition;

    return (
        <View style={[styles.filigree, { bottom: position, opacity: 0.12 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 394 221"
                preserveAspectRatio="xMidYMid meet"
            >
                <Path
                    d="M26.9999 210L110 210C116.075 210 121 214.925 121 221L119 221C119 216.029 114.971 212 110 212L26.9999 212C18.7157 212 12 205.284 12 197L12.0005 108.301L12.0005 103L12.0005 13.894C12.0004 7.32509 6.67481 1.9995 0.105925 1.99942L0.105924 -0.000579834C7.77938 -0.000504135 14.0004 6.22052 14.0005 13.894L14 103L14 108.301L14 197C14 204.18 19.8202 210 26.9999 210Z"
                    fill={colors.gray}
                />
                <Path
                    d="M367 210L284 210C277.925 210 273 214.925 273 221L275 221C275 216.029 279.029 212 284 212L367 212C375.284 212 382 205.284 382 197L382 108.301L382 103L382 13.894C382 7.32509 387.325 1.9995 393.894 1.99942L393.894 -0.000579834C386.221 -0.000504135 380 6.22052 380 13.894L380 103L380 108.301L380 197C380 204.18 374.18 210 367 210Z"
                    fill={colors.gray}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 192.254C2.99243 198.043 9.03406 202 16 202H378C384.966 202 391.008 198.043 394 192.254V184C394 192.837 386.837 200 378 200H16C7.16345 200 0 192.837 0 184V192.254Z"
                    fill={colors.gray}
                />
            </Svg>
        </View>
    );
};
export const Filigree5_Top = ({ customPosition }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 394);
    const svgHeight = 204;

    const position = customPosition == null ? -10 : customPosition;

    return (
        <View style={[styles.filigree, { top: position, opacity: 0.12 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 394 204"
                preserveAspectRatio="xMidYMid meet"
            >
                <Path
                    d="M368 10L218 10C212.477 10 208 5.52285 208 -1.72225e-06L210 -1.70372e-06C210 4.41828 213.582 8 218 8L368 7.99999C375.732 7.99999 382 14.268 382 22L382 104L382 108.603L382 190.058C382 196.626 387.325 201.952 393.894 201.952L393.894 203.952C386.221 203.952 380 197.731 380 190.058L380 108.603L380 104L380 22C380 15.3726 374.628 10 368 10Z"
                    fill={colors.gray}
                />
                <Path
                    d="M25.8941 10L175.894 10C181.417 10 185.894 5.52285 185.894 -1.72225e-06L183.894 -1.70372e-06C183.894 4.41828 180.312 8 175.894 8L25.8941 7.99999C18.1621 7.99999 11.8941 14.268 11.8941 22L11.894 104L11.894 108.603L11.8937 190.058C11.8937 196.626 6.56897 201.952 0.000119744 201.952L0.000119613 203.952C7.67354 203.952 13.8937 197.731 13.8937 190.058L13.8937 108.603L13.8937 104L13.8941 22C13.8941 15.3726 19.2666 10 25.8941 10Z"
                    fill={colors.gray}
                />
                <Path
                    d="M37 0V0C37 9.94113 45.0589 18 55 18H318C327.941 18 336 9.94113 336 0V0"
                    stroke={colors.gray}
                    strokeWidth="2"
                    fill="none"
                />
            </Svg>
        </View>
    );
};

export const Filigree6_Top = ({ customTopPosition, customRightPosition, }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 246);
    const svgHeight = 36;

    const positionTop = customTopPosition == null ? 0 : customTopPosition;
    const positionRight = customRightPosition == null ? -3 : customRightPosition;

    return (
        <View style={[styles.filigree, { top: positionTop, right: positionRight, opacity: 0.3 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 246 36"
                preserveAspectRatio="xMidYMid meet"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-9.89186e-06 30.6953C-9.8526e-06 30.9198 0.0111749 31.1411 0.0328882 31.3583C0.285528 33.8863 1.96364 35.8619 4.03158 35.9929L4.25054 36L246 36L246 35.3369L4.25054 35.3369C2.37691 35.3369 0.827582 33.6077 0.569708 31.3584L239.624 31.3583L246 31.3583L246 30.6953L239.604 30.6953C239.403 27.3989 237.717 24.6208 235.378 23.4013C234.559 22.9741 233.66 22.7382 232.717 22.7382L86.831 22.7382L93.694 16.1073L133.361 16.1073L238.717 16.1073C239.74 16.1073 240.742 16.3236 241.686 16.7335C243.288 17.4295 244.72 18.6834 245.799 20.3831L246 20.7005L246 19.6446C244.886 18.0107 243.452 16.7988 241.86 16.1073C240.861 15.6734 239.8 15.4442 238.717 15.4442L135.17 15.4443L135.761 14.9702C138.074 13.1149 140.766 12.1288 143.516 12.1288L235.667 12.1288L236.966 12.088C237.963 12.0568 238.922 11.8405 239.822 11.4657C242.72 10.2598 245.01 7.41344 246 3.81632L246 0C245.926 6.21572 241.939 11.2689 236.953 11.4249L235.654 11.4657L143.516 11.4657L143.249 11.469C143.141 11.4714 143.032 11.4753 142.924 11.4807C140.28 11.6122 137.707 12.6222 135.474 14.4127L134.188 15.4443L93.5119 15.4443L85.9628 22.7382L14.8769 22.7382C14.8769 26.3219 8.59029 29.3948 3.86832 30.6953L-9.89186e-06 30.6953ZM239.071 30.6953L6.03803 30.6953C7.04511 30.3399 8.06888 29.9228 9.04744 29.4527C10.6925 28.6622 12.2485 27.7069 13.4033 26.6235C14.3658 25.7205 15.142 24.6395 15.3516 23.4013L85.2765 23.4013L232.717 23.4013C236.059 23.4013 238.801 26.611 239.071 30.6953Z"
                    fill={colors.white}
                //fillOpacity="0.7"
                />
            </Svg>
        </View>
    );
};

export const Filigree6_Bottom = ({ customBottomPosition, customRightPosition, }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 245);
    const svgHeight = 43;

    const positionBottom = customBottomPosition == null ? 0 : customBottomPosition;
    const positionRight = customRightPosition == null ? -3 : customRightPosition;

    return (
        <View style={[styles.filigree, { bottom: positionBottom, right: positionRight, opacity: 0.3 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 245 43"
                preserveAspectRatio="xMidYMid meet"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M222.145 1.31779e-05L112.472 1.41572e-05L100.374 1.08713e-05L-1.87959e-06 1.14441e-05C4.07016 4.36554 9.69805 6.83392 15.5805 6.83392L86.9859 6.83392L112.472 6.83391L142.562 6.83392C148.469 8.14934 155.383 11.6617 157.35 16.5153L215.523 16.5153L220.232 16.5592C234.301 16.6907 245.596 28.5327 245.444 42.9933L245.998 43C246.135 29.9565 237.157 18.9978 225.161 16.5153C223.569 16.1856 221.922 16.0055 220.237 15.9897L215.528 15.9458L157.71 15.9458C156.274 12.8017 152.94 10.2872 149.282 8.54907C147.832 7.86014 146.312 7.28425 144.808 6.83392L210.088 6.83391C211.436 6.83391 212.758 6.63795 214.022 6.26443C217.126 5.34672 219.875 3.35718 221.766 0.569506L245.444 0.569504L245.444 1.21595e-05L222.145 1.31779e-05ZM221.082 0.569506L112.472 0.569506L100.741 0.569503C100.312 1.51821 99.4986 2.36328 98.4884 3.09718C97.412 3.87919 96.0891 4.55233 94.7053 5.10263C93.4917 5.5853 92.2224 5.97662 91.019 6.26442L112.472 6.26443L137.959 6.26442L210.088 6.26443C214.434 6.26443 218.509 4.14232 221.082 0.569506ZM1.36024 0.5695L100.12 0.569503C99.7229 1.30208 99.0452 1.99476 98.1687 2.63169C97.1406 3.37852 95.8621 4.03206 94.5057 4.57152C91.7884 5.65231 88.8045 6.25872 86.9849 6.26442L15.5805 6.26443C10.2978 6.26443 5.22723 4.21989 1.36024 0.5695Z"
                    fill={colors.white}
                //fillOpacity="0.7"
                />
            </Svg>
        </View>
    );
};

export const Filigree7_Top = ({ customTopPosition, customLeftPosition, }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 266);
    const svgHeight = 26;

    const positionTop = customTopPosition == null ? 0 : customTopPosition;
    const positionLeft = customLeftPosition == null ? -20 : customLeftPosition;

    return (
        <View style={[styles.filigree, { top: positionTop, left: positionLeft, opacity: 0.3 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 266 26"
                preserveAspectRatio="xMidYMid meet"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.073 18.2L263.369 18.1998L263.23 18.1997L263.073 18.2Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.369 18.1998L263.23 18.1997L263.073 18.2C263.125 18.1997 263.178 18.1997 263.23 18.1997C263.276 18.1997 263.323 18.1998 263.369 18.1998Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.369 18.1998C263.419 18.1999 263.469 18.2 263.519 18.2L263.369 18.1998L263.23 18.1997L263.073 18.2C263.125 18.1997 263.178 18.1997 263.23 18.1997C263.276 18.1997 263.323 18.1998 263.369 18.1998Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.073 18.2C263.125 18.1997 263.178 18.1997 263.23 18.1997L263.073 18.2Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.369 18.1998C263.27 18.1997 263.171 18.1995 263.073 18.2C263.125 18.1997 263.178 18.1997 263.23 18.1997L263.369 18.1998Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M263.369 18.1998L263.519 18.2H263.073L263.369 18.1998Z"
                    fill={colors.white}
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M-2 0H97.9092L98.5567 0.00509289C104.638 0.103113 110.622 1.58138 116.107 4.33331H187.994C187.994 7.35184 192.596 9.96995 199.329 11.2666H241.248L242.056 11.2742C250.396 11.4318 258.539 14.0272 265.575 18.7798L266 19.0667H251.793C244.313 20.3634 240.709 22.9815 240.709 26H-2V25.1333H139.44L131.841 19.0667H-2V18.2L263.073 18.2C256.657 14.3674 249.428 12.2805 242.041 12.1409L241.248 12.1333H-2V11.2666H195.665C195.382 11.1825 195.104 11.0961 194.832 11.0073C194.724 10.972 194.618 10.9363 194.512 10.9003C194.41 10.8656 194.308 10.8304 194.208 10.7949L194.025 10.7292L193.853 10.6658C191.908 9.94124 190.276 9.05862 189.114 8.03532C188.196 7.22695 187.516 6.27481 187.273 5.19999H-2V4.33331H114.1C108.988 2.05103 103.484 0.866677 97.9092 0.866677H-2V0ZM263.073 18.2H263.519L263.369 18.1998C263.27 18.1997 263.171 18.1995 263.073 18.2ZM239.97 25.1333H140.694L133.095 19.0667H247.871C247.219 19.2542 246.608 19.4542 246.038 19.6675C242.632 20.9435 240.408 22.7902 239.97 25.1333Z"
                    fill={colors.white}
                />
            </Svg>
        </View>
    );
};

export const Filigree7_Bottom = ({ customBottomPosition, customLeftPosition, }) => {
    const { width } = useWindowDimensions();
    const svgWidth = Math.min(width, 162);
    const svgHeight = 44;

    const positionBottom = customBottomPosition == null ? 0 : customBottomPosition;
    const positionLeft = customLeftPosition == null ? -45 : customLeftPosition;

    return (
        <View style={[styles.filigree, { bottom: positionBottom, left: positionLeft, opacity: 0.3 }]}>
            <Svg
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 162 44"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M146.038 7.49859H95.295C92.5768 8.24222 90.0726 9.65846 88.0412 11.6427L84.9141 14.6972H37.2208H31.5176C18.6567 14.6972 8.157 24.8003 7.53351 37.497C7.52383 37.6966 7.5165 37.8969 7.51152 38.0976C7.30897 38.1048 7.10846 38.1198 6.91001 38.1416C3.59322 38.5054 0.878517 40.8691 -1.31089e-06 44V42.3341C1.29711 39.7184 3.87257 37.848 6.91001 37.5383L6.93082 37.5361C7.45143 26.3332 15.4721 17.085 26.0903 14.6972C27.8365 14.3046 29.6527 14.0973 31.5176 14.0973H37.2208H84.6696L87.6214 11.2139C89.2841 9.58991 91.2519 8.33441 93.392 7.49859H78.6413H4.74142L-1.31089e-06 14.0774V13.0512L4.00155 7.49859L4.34393 7.02348L4.35331 7.01059L4.36386 6.99888L4.45356 6.8987L5.68706 5.52142C8.82827 2.01503 13.412 0 18.2326 0H162V0.599887C158.964 0.599887 155.992 1.42949 153.433 2.98948L146.038 7.49859ZM5.25909 6.8987H78.6413H99.7659H145.87L153.121 2.47688C154.483 1.64669 155.957 1.01692 157.494 0.599887H18.2326C13.5779 0.599887 9.15863 2.54586 6.13438 5.92154L5.25909 6.8987Z"
                    fill={colors.white}
                />
            </Svg>
        </View>
    );
};
const styles = StyleSheet.create({
    filigree: {
        position: 'absolute',

        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
    },
});