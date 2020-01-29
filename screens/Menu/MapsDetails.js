import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';

const zollverein = [
  {name: '1', latitude: 37.8025259, longitude: -122.4351431},
  {name: '2', latitude: 37.7896386, longitude: -122.421646},
  {name: '3', latitude: 37.7665248, longitude: -122.4161628},
  {name: '4', latitude: 37.7734153, longitude: -122.4577787},
  {name: '5', latitude: 37.7948605, longitude: -122.4596065}
];

const bottrop = [
  {name: "1", latitude: 36.8025259, longitude: -122.4451431},
  {name: "2", latitude: 36.7896386, longitude: -122.431646},
  {name: "3", latitude: 36.7665248, longitude: -122.4261628},
  {name: "4", latitude: 36.7734153, longitude: -122.4677787},
  {name: "5", latitude: 36.7948605, longitude: -122.4796065},
]



export default class MapsDetails extends Component {
  state = {
    data: bottrop,
  }

  render() { 
 
    return (
      <MapView
        style={{ flex: 1}}
        region={{
          latitude: this.state.data[1].latitude,
          longitude: this.state.data[1].longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        }}>

        <Polygon
          coordinates={this.state.data}/>

          <Marker
         coordinate={{latitude: this.state.data[1].latitude, longitude: this.state.data[1].longitude}}>
          </Marker>

          <View>
          <Text>Distanz: {this.props.navigation.getParam('distance', 'no data')}</Text>
          <Text>Zeit: {this.props.navigation.getParam('time', 'no data')}</Text>
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
