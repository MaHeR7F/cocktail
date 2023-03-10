import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cocktails from "./Components/Cocktails"

import { Fontisto } from '@expo/vector-icons';


import Ionicons from 'react-native-vector-icons/Ionicons';

/*function Cocktails() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cocktail!</Text>
      </View>
  );
}*/

function Details() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

function Favoris() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favoris!</Text>
      </View>
  );
}

function CocktailsScreen({ navigation }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Cocktails')}
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function FavorisScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favoris</Text>
            <Button
                title="Go to Favoris"
                onPress={() => navigation.navigate('Favoris')}
            />
        </View>
    );
}

const CocktailsStack = createNativeStackNavigator();

function CocktailsStackScreen() {
    return (
        <CocktailsStack.Navigator>
            <CocktailsStack.Screen name="Cocktails" component={CocktailsScreen} />
            <CocktailsStack.Screen name="Details" component={DetailsScreen} />
           {/* <CocktailsStack.Screen name="Favoris" component={FavorisScreen} />*/}
        </CocktailsStack.Navigator>
    );
}
/*

const DetailsStack = createNativeStackNavigator();

function DetailsStackScreen() {
    return (
        <DetailsStack.Navigator>
            <DetailsStack.Screen name="Cocktails" component={CocktailsScreen} />
            <DetailsStack.Screen name="Details" component={DetailsScreen} />
            <DetailsStack.Screen name="Details" component={FavorisScreen} />
        </DetailsStack.Navigator>
    );
}
*/
/*
const FavorisStack = createNativeStackNavigator();

function FavorisStackScreen() {
    return (
        <FavorisStack.Navigator>
            <FavorisStack.Screen name="Cocktails" component={CocktailsScreen} />
            <FavorisStack.Screen name="Details" component={DetailsScreen} />
            <FavorisStack.Screen name="Details" component={FavorisScreen} />
        </FavorisStack.Navigator>
    );
}*/

const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <View style={{ flex: 1}}>
          <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          /*barStyle={statusBarStyle}*/
          //showHideTransition={statusBarTransition}
          //hidden={hidden}
          />
          <NavigationContainer>
              <Tab.Navigator
                  initialRouteName={"Cocktails"}

                  /*screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                          let iconName;

                          if (route.name === 'Cocktails') {
                              iconName = focused
                                  ? 'ios-information-circle'
                                  : 'ios-information-circle-outline';
                          } else if (route.name === 'Details') {
                              iconName = focused ? 'ios-list' : 'ios-list-outline';
                          }

                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={size} color={color} />;
                      },
                      tabBarActiveTintColor: 'tomato',
                      tabBarInactiveTintColor: 'gray',
                  })}*/
              >
                  <Tab.Screen name="Cocktails" component={CocktailsStackScreen} options={{
                   headerShown: false, tabBarIcon:({ color, size}) => (
                          <Fontisto name="cocktail" size={size} color={color} />
                      )}
                  }
                  />
                  {/*<Tab.Screen name="Details" component={DetailsScreen} />*/}
                  <Tab.Screen name="Favoris" component={FavorisScreen} options={{
                      tabBarIcon:({ color, size}) => (
                          <Fontisto name="favorite" size={size} color={color} />
                      )}
                  }
                  />
              </Tab.Navigator>
          </NavigationContainer>
      </View>
          );
      }


/*const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={Profil} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return (
      <Button
          title="Go to Jane's profile"
          onPress={() =>
              navigation.navigate('Profile', {name: 'Jane'})
          }
      />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profil</Text>;
};


const App = () => {
  return (
      <NavigationContainer>
        {/!* Rest of your app code *!/}
      </NavigationContainer>
  );
};

export default App;
export default function App() {
  return (

  );
}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
