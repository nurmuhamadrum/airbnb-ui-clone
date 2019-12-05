import React from 'react';
// import {SafeAreaView, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Explore from './src/screens/Explore';
import Saved from './src/screens/Saved';
import Trips from './src/screens/Trips';
import Inbox from './src/screens/Inbox';
import Profile from './src/screens/Profile';

const TabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="search" color={tintColor} size={24} />
      ),
      tabBarOptions: {activeTintColor: 'blue'},
    },
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="heart" color={tintColor} size={24} />
      ),
      tabBarOptions: {activeTintColor: 'blue'},
    },
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="suitcase" color={tintColor} size={24} />
      ),
      tabBarOptions: {activeTintColor: 'blue'},
    },
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Icon name="inbox" color={tintColor} size={24} />
      ),
      tabBarOptions: {activeTintColor: 'blue'},
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="user" color={tintColor} size={24} />
      ),
      tabBarOptions: {activeTintColor: 'blue'},
    },
  },
});

const MyScreen = createSwitchNavigator({
  RouteOne: TabNavigator,
});

const RootNavigation = createAppContainer(MyScreen);

const App = () => {
  return <RootNavigation />;
};

export default App;
