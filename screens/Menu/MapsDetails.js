import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

export default class MapsDetails extends Component {
  state={
    route1: [
      {name: '1', latitude: 37.8025259, longitude: -122.4351431},
      {name: '2', latitude: 37.7896386, longitude: -122.421646},
      {name: '3', latitude: 37.7665248, longitude: -122.4161628},
      {name: '4', latitude: 37.7734153, longitude: -122.4577787},
      {name: '5', latitude: 37.7948605, longitude: -122.4596065}
    ]
  }

  render() {

    return (
      <MapView
        style={{ flex: 1}}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

        <Polygon
          coordinates={this.state.route1}/>

        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}>
          </Marker>
          <View>
          <Text>Kilometer: 17km </Text>
          <Text>Zeit: 1:35h </Text>
        </View>


        </MapView>

        
    );
  }
}

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
