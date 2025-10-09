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
import LibraryScreen from './screens/LibraryScreen';
import LibraryListingScreen from './screens/LibraryListingScreen';
import CreationListingScreen from './screens/CreationListingScreen';
import EditStoryScreen from './screens/EditStoryScreen';
import CreateStoryScreen from './screens/CreateStoryScreen';
import CreateStoryScreen_2 from './screens/CreateStoryScreen_2';
import CreateStoryScreen_3 from './screens/CreateStoryScreen_3';
import CreateStoryScreen_4 from './screens/CreateStoryScreen_4';
import AccountScreen from './screens/AccountScreen';
import NotificationScreen from './screens/NotificationScreen';
import LoginScreen from './screens/LoginScreen';
import GenreListingScreen from './screens/GenreListingScreen';

import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Overview' }} />
          <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} options={{ title: 'BookDetailScreen' }} />
          <Stack.Screen name="BookListingScreen" component={BookListingScreen} options={{ title: 'BookListingScreen' }} />
          <Stack.Screen name="PageScreen" component={PageScreen} options={{ title: 'PageScreen' }} />
          <Stack.Screen name="SearchListingScreen" component={SearchListingScreen} options={{ title: 'SearchListingScreen' }} />
          <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{ title: 'SearchResultScreen' }} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} options={{ title: 'LibraryScreen' }} />
          <Stack.Screen name="LibraryListingScreen" component={LibraryListingScreen} options={{ title: 'LibraryListingScreen' }} />
          <Stack.Screen name="CreationListingScreen" component={CreationListingScreen} options={{ title: 'CreationListingScreen' }} />
          <Stack.Screen name="EditStoryScreen" component={EditStoryScreen} options={{ title: 'EditStoryScreen' }} />
          <Stack.Screen name="CreateStoryScreen" component={CreateStoryScreen} options={{ title: 'CreateStoryScreen' }} />
          <Stack.Screen name="CreateStoryScreen_2" component={CreateStoryScreen_2} options={{ title: 'CreateStoryScreen_2' }} />
          <Stack.Screen name="CreateStoryScreen_3" component={CreateStoryScreen_3} options={{ title: 'CreateStoryScreen_3' }} />
          <Stack.Screen name="CreateStoryScreen_4" component={CreateStoryScreen_4} options={{ title: 'CreateStoryScreen_4' }} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ title: 'AccountScreen' }} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{ title: 'NotificationScreen' }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'LoginScreen' }} />
          <Stack.Screen name="GenreListingScreen" component={GenreListingScreen} options={{ title: 'GenreListingScreen' }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
