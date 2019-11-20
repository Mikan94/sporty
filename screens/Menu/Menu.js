import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Profile from './Profile';
import Map from './Map';
import Setting from './Setting';

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Menu </Text>
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
    },
    Map: {
      screen: Map,
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
