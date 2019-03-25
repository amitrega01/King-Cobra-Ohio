import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.Header}>{this.props.title}</Text>
          <Text style={styles.Data}>{this.props.date}</Text>
        </View>
        <Text style={styles.Source}>{this.props.name} </Text>
        <Text>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.25)',
    marginVertical: 8,
    marginHorizontal: 12
  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  Source: {
    color: 'rgb(114, 114, 142)'
  },

  Data: {
    color: 'rgb(114, 114, 142)',
    alignItems: 'stretch'
  }
});
