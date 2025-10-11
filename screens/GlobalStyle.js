import { StyleSheet } from 'react-native';

export const bookCover = {
  "../assets/aGameOfThrones.jpg": require("../assets/aGameOfThrones.jpg"),
  "../assets/aClashOfKings.jpg": require("../assets/aClashOfKings.jpg"),
  "../assets/aStormOfSwords.jpg": require("../assets/aStormOfSwords.jpg"),
  "../assets/aFeastForCrows.jpg": require("../assets/aFeastForCrows.jpg"),
  "../assets/aDanceWithDragons.jpg": require("../assets/aDanceWithDragons.jpg"),
  "../assets/fireAndBlood.jpg": require("../assets/fireAndBlood.jpg"),
  "../assets/theHobbit.jpg": require("../assets/theHobbit.jpg"),
  "../assets/theFellowshipOfTheRing.jpg": require("../assets/theFellowshipOfTheRing.jpg"),
  "../assets/theTwoTowers.jpg": require("../assets/theTwoTowers.jpg"),
  "../assets/theReturnOfTheKing.jpg": require("../assets/theReturnOfTheKing.jpg"),
  "../assets/harryPotter1.jpg": require("../assets/harryPotter1.jpg"),
  "../assets/harryPotter2.jpg": require("../assets/harryPotter2.jpg"),
  "../assets/harryPotter3.jpg": require("../assets/harryPotter3.jpg"),
  "../assets/harryPotter4.jpg": require("../assets/harryPotter4.jpg"),
  "../assets/harryPotter5.jpg": require("../assets/harryPotter5.jpg"),
  "../assets/harryPotter6.jpg": require("../assets/harryPotter6.jpg"),
  "../assets/harryPotter7.jpg": require("../assets/harryPotter7.jpg"),
  "../assets/dune1.jpg": require("../assets/dune1.jpg"),
  "../assets/dune2.jpg": require("../assets/dune2.jpg"),
  "../assets/dune3.jpg": require("../assets/dune3.jpg"),
  "../assets/dune4.jpg": require("../assets/dune4.jpg"),
  "../assets/dune5.jpg": require("../assets/dune5.jpg"),
  "../assets/dune6.jpg": require("../assets/dune6.jpg"),
}

export const colors = {
  trueBlack: '#000000ff',
  trueWhite: '#ffffffff',

  black: '#131313ff',
  gray: '#252525ff',
  lightgray: '#767676ff',
  white: '#ecececff',

  gold: '#ffad28ff',
}

export const globalStyles = StyleSheet.create({
  //----------------------------------------------//

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
  },

  //----------------------------------------------//

  bottomPadding: {
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

