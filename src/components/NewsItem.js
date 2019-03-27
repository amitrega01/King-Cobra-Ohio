import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
export default class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.container, styles.Shadow, styles.Background]}
        onPress={() => Linking.openURL(this.props.source)}
        activeOpacity={0.8}
      >
        <Text style={styles.Header}>{this.props.title}</Text>
        <Text style={styles.Data}>{this.props.date}</Text>
        <HTML
          tagsStyles={{
            p: { textAlign: 'justify' }
          }}
          html={this.props.content}
          ignoredTags={[...IGNORED_TAGS, 'a', 'img']}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    fontSize: 22,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 0.25,
    borderColor: 'rgb(114, 114, 142)',
    padding: 12
  },

  Data: {
    color: 'rgb(114, 114, 142)',
    alignItems: 'stretch'
  },

  Shadow: {
    elevation: 4
  },

  Background: {
    backgroundColor: '#ffffff'
  }
});
