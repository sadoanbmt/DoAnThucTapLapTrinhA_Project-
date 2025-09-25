import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';

import { colors } from './GlobalStyle';
import { Filigree5_Bottom, Filigree5_Top, Filigree6_Top, Filigree6_Bottom, Filigree1, Filigree2 } from './Decorations/Filigree';

const SideTabRight = () => {
  return (
    <View style={styles.str_container}>
      <View style={styles.str_menuContainer}>
        <Filigree6_Top />
        <Filigree6_Bottom />

        <TouchableOpacity style={styles.str_menuButton}>
          <MaterialIcons name="info" color={colors.gold} size={20} />
          <Text style={styles.str_menuButtonText}>
            Thông Tin Sách
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.str_menuButton}>
          <MaterialIcons name="bookmark" color={colors.gold} size={20} />
          <Text style={styles.str_menuButtonText}>
            Đánh Dấu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.str_menuButton}>
          <MaterialIcons name="settings" color={colors.gold} size={20} />
          <Text style={styles.str_menuButtonText}>
            Cài Đặt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Header = ({ showChapterPicker, setShowChapterPicker, chapterPicked }) => {
  const navigation = useNavigation();
  const [right_isVisible, setRightIsVisible] = useState(false);

  const chapterNumber = chapterPicked + 1;
  const chapterName = chapterList.at(chapterPicked).title;

  return (
    <View>
      <View style={styles.h_container}>
        <TouchableOpacity style={styles.h_button}>
          <MaterialIcons name="arrow-back" color={colors.white} size={30}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.h_chapterSelect}
          onPress={() => {
            setRightIsVisible(false)
            setShowChapterPicker(!showChapterPicker)
          }}
        >
          <Text style={styles.h_chapterSelectText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Chương {chapterNumber}: {chapterName}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.h_button}
          onPress={() => {
            setRightIsVisible(!right_isVisible)
            setShowChapterPicker(false)
          }}
        >
          <MaterialIcons name="menu" color={colors.white} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.sideTabContainer}>
        {right_isVisible && (
          <Pressable style={styles.sideTabBackground}
            onPress={() => {
              setRightIsVisible(false)
            }}
          />
        )}
        {right_isVisible && (<SideTabRight />)}
      </View>
    </View>
  )
}
const chapterList = [
  {
    title: 'Prologue',
    content: 'The comet’s tail spread across the dawn, a red slash that bled above the crags of Dragonstone like a wound in the pink and purple sky. The maester stood on the windswept balcony outside his chambers. It was here the ravens came, after long flight. Their droppings speckled the gargoyles that rose twelve feet tall on either side of him, a hellhound and a wyvern, two of the thousand that brooded over the walls of the ancient fortress. When first he came to Dragonstone, the army of stone grotesques had made him uneasy, but as the years passed he had grown used to them. Now he thought of them as old friends. The three of them watched the sky together with foreboding.The maester did not believe in omens. And yet. . . old as he was, Cressen had never seen a comet half so bright, nor yet that color, that terrible color, the color of blood and flame and sunsets. He wondered if his gargoyles had ever seen its like. They had been here so much longer than he had, and would still be here long after he was gone. If stone tongues could speak . . .'
  },
  {
    title: 'Arya',
    content: 'At Winterfell they had called her “Arya Horseface” and she’d thought nothing could be worse, but that was before the orphan boy Lommy Greenhands had named her “Lumpyhead.” Her head felt lumpy when she touched it. When Yoren had dragged her into that alley she’d thought he meant to kill her, but the sour old man had only held her tight, sawing through her mats and tangles with his dagger. She remembered how the breeze sent the fistfuls of dirty brown hair skittering across the paving stones, toward the sept where her father had died. “I’m taking men and boys from the city,” Yoren growled as the sharp steel scraped at her head. “Now you hold still, boy.” By the time he had finished, her scalp wasnothing but tufts and stubble.'
  },
  {
    title: 'Sansa',
    content: 'The morning of King Joffrey’s name day dawned bright and windy, with the long tail of the great comet visible through the high scuttling clouds. Sansa was watching it from her tower window when Ser Arys Oakheart arrived to escort her down to the tourney grounds. “What do you think it means?” she asked him. “Glory to your betrothed,” Ser Arys answered at once. “See how it flames across the sky today on His Grace’s name day, as if the gods themselves had raised a banner in his honor. The smallfolk have named it King Joffrey’s Comet.” Doubtless that was what they told Joffrey; Sansa was not so sure. “I’ve heard servants calling it the Dragon’s Tail.”'
  },
]

const PageDisplay = ({ setShowChapterPicker, showChapterPicker, setChapterPicked, chapterPicked }) => {
  const chapterContent = chapterList.at(chapterPicked).content;
  return (
    <View style={styles.p_container}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'transparent']}
        style={[styles.shadow, styles.topShadow]}
      />
      <Filigree5_Top />
      <Filigree5_Bottom />

      <View style={styles.p_textDisplay}>
        {showChapterPicker &&
          <ChapterPicker
            setShowChapterPicker={setShowChapterPicker}
            setChapterPicked={setChapterPicked}
            chapterPicked={chapterPicked}
          />
        }
        <ScrollView bounces={false} overScrollMode="never" showsVerticalScrollIndicator={false}>
          <Text style={styles.p_text}>
            {chapterContent}
          </Text>
        </ScrollView>
      </View>
    </View>
  )
}

const ChapterPicker = ({ setShowChapterPicker, setChapterPicked, chapterPicked }) => {
  const ChapterComponent = ({ index, chapter }) => {
    return (
      <TouchableOpacity style={styles.cc_container}
        onPress={() => {
          setChapterPicked(index)
          setShowChapterPicker(false)
        }}
      >
        <View style={[styles.cc_decoration, chapterPicked == index && styles.cc_decoration_active]} />
        <Text style={[styles.cc_text, chapterPicked == index && styles.cc_text_active]}>Chương {index + 1}: {chapter.title}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.cp_container}>
      <ScrollView
        style={{ width: '100%' }}>
        {
          chapterList.map((chapter, index) => (
            <ChapterComponent
              chapterPicked={chapterPicked}
              index={index}
              chapter={chapter}
              setChapterPicked={setChapterPicked}
            />)
          )
        }
        <Filigree2/>
      </ScrollView>
    </View>
  )
}

const PageScreen = () => {
  const [showChapterPicker, setShowChapterPicker] = useState(false);
  const [chapterPicked, setChapterPicked] = useState(0);
  return (
    <View style={styles.container}>
      <Header
        chapterPicked={chapterPicked}
        showChapterPicker={showChapterPicker}
        setShowChapterPicker={setShowChapterPicker}
      />
      <PageDisplay
        setShowChapterPicker={setShowChapterPicker}
        chapterPicked={chapterPicked}
        setChapterPicked={setChapterPicked}
        showChapterPicker={showChapterPicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //-------------------------------------------------------//

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  //-------------------------------------------------------//
  // HEADER

  h_container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    paddingTop: 45,
    paddingBottom: 10,

    width: '100%',
    height: 'max-content',

    backgroundColor: colors.gray,
  },
  h_button: {
    marginHorizontal: 20,
  },
  h_chapterSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: 220,
    height: 25,
  },
  h_chapterSelectText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16
  },

  //-------------------------------------------------------//
  // PAGE

  p_container: {
    width: '100%',
    height: '89%',
  },
  p_textDisplay: {
    width: '100%',
    height: '100%',
    // padding: 23,
  },
  p_text: {
    color: colors.black,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',

    marginVertical: 15,
    padding: 20,
    paddingBottom: 100
  },

  //-------------------------------------------------------//

  sideTabContainer: {
    zIndex: 9999,
    position: 'absolute',
    top: 85,

    width: '100%',
    height: '100%',

  },
  sideTabBackground: {
    width: '100%',
    height: 1000,

    opacity: 0.8,

    backgroundColor: colors.black
  },
  str_container: {
    zIndex: 99999,
    position: 'absolute',
    top: 0,
    right: 0,

    height: 1000,
    width: '70%',

    opacity: 1,

    backgroundColor: colors.black,
  },
  str_menuContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    marginTop: 10,
    paddingTop: 50,
    paddingBottom: 60,
  },
  stl_menuContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },

  str_menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '90%',
    marginVertical: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,

    borderRadius: 4,

    borderColor: colors.lightgray,
    borderLeftWidth: 5,
    backgroundColor: colors.gray
  },
  str_menuButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1.5,

    marginLeft: 10,
  },

  //-------------------------------------------------------//

  cp_container: {
    zIndex: 9999,
    position: 'absolute',
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '101%',
    padding: 20,
    // paddingBottom: 65,
    marginBottom: 100,

    backgroundColor: colors.black,
    opacity: 0.99

    // borderColor: 'red',
    // borderWidth: 1
  },
  cc_container: {
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 3,

    borderRadius: 4,

    backgroundColor: colors.gray,
    // borderColor: 'red',
    // borderWidth: 1
  },
  cc_text: {
    marginLeft: 10,
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15
  },
  cc_decoration: {
    width: 4,
    height: 15,

    backgroundColor: colors.white,

    borderRadius: 10
  },
  cc_text_active: {
    color: colors.gold,
  },
  cc_decoration_active: {
    backgroundColor: colors.gold,
  },
  
  //-------------------------------------------------------//

  shadow: {
    position: 'absolute',
  },
  topShadow: {
    height: 70,
    width: '100%',
    top: 0,
    left: 0,
  },
  bottomShadow: {
    height: 150,
    width: '100%',
    bottom: 0,
    left: 0,
  },
});

export default PageScreen;