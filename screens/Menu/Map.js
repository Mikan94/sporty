import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Maps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Zollverein', distance: '12km', time: '6min'},
            {key: 'Bottrop', distance: '15km', time: '12min'},
            {key: 'Innenstadt', distance: '30km', time: '65min'},
            {key: 'Baldeneysee', distance: '5km', time: '30min'},
          ]}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('MapsDetails', {
                route: item.key,
                distance: item.distance,
                time: item.time
              })}
            >
              <View>
                <Text style={styles.item}>{item.key}</Text>
                <Text style={styles.details}>{item.distance} {item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  details: {
    fontSize: 14,
    paddingBottom: 50,
  }
});