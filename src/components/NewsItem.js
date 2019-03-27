import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  Header: {
    fontSize: 22,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgb(114, 114, 142)',
    padding: 10
  },

  Data: {
    color: 'rgb(114, 114, 142)',
    alignItems: 'stretch'
  },

  Shadow: {
    elevation: 7
  },

  Background: {
    backgroundColor: '#ffffff'
  }
});

export default class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, styles.Shadow, styles.Background]}
        onPress={this.props.source}
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
