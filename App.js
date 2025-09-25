import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetailScreen from './screens/BookDetailScreen';
import BookListingScreen from './screens/BookListingScreen';
import MainScreen from './screens/MainScreen';
import PageScreen from './screens/PageScreen';
import SearchListingScreen from './screens/SearchListingScreen';
import SearchResultScreen from './screens/SearchResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MainScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} options={{ title: 'BookDetailScreen' }}/>
        <Stack.Screen name="BookListingScreen" component={BookListingScreen} options={{ title: 'BookListingScreen' }}/>
        <Stack.Screen name="PageScreen" component={PageScreen} options={{ title: 'PageScreen' }}/>
        <Stack.Screen name="SearchListingScreen" component={SearchListingScreen} options={{ title: 'SearchListingScreen' }}/>
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ title: 'SearchResultScreen' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
