import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container}
        onPress={() => alert(this.props.source)}
      >
        <Text style={styles.Header}>{this.props.title}</Text>
        <Text style={styles.Data}>{this.props.date}</Text>
        <Text>{this.props.content}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 2,
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 12
  },
  Header: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.75)',
    textAlign: 'justify',
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
