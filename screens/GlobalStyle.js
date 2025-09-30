import { StyleSheet } from 'react-native';

export const colors = {
  black: '#0F0F10',
  trueBlack: '#000000',
  white: '#e1e3e7ff',
  trueWhite: '#ffffff',
  gray: '#27282C',
  lightgray: '#a7aaaf',
  gold: '#ebbe54ff',
};

export const globalStyles = StyleSheet.create({
  //----------------------------------------------//

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },

  //----------------------------------------------//
  
  bottomPadding:{
    paddingBottom: 150
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

  //----------------------------------------------//
});

