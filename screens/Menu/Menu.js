import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from './Profile';
import Map from './Map';
import Setting from './Setting';
import MapsDetails from './MapsDetails';
import RunScreen from './RunScreen';
import Workout from './Workout';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Menu </Text>
      </View>
    );
  }
}

const MapStack = createStackNavigator({
  Map: {
    screen: Map,
  },
  MapsDetails: {
    screen: MapsDetails,
    navigationOptions: {
      visible: false,
      header: null,
    },
  },
  RunScreen: {
    screen: RunScreen,
  },
  Workout: {
    screen: Workout,
  },
});

export default createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Map: {
      screen: MapStack,
    },
    Setting: {
      screen: Setting,
    },
  },
  {
    initialRouteName: 'Map',
    order: ['Profile', 'Map', 'Setting'],
    activeTintColor: 'orange',
  }
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 36,
    padding: 20,
    textAlign: 'center',
  },
});
