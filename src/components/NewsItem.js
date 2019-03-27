import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import { connect } from 'react-redux';

class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={this.props.darkMode ? stylesDark.container : styles.container}
        onPress={() => Linking.openURL(this.props.source)}
        activeOpacity={0.8}
      >
        <Text style={this.props.darkMode ? stylesDark.Header : styles.Header}>
          {this.props.title}
        </Text>
        <Text style={this.props.darkMode ? stylesDark.Data : styles.Data}>
          {this.props.date}
        </Text>
        <HTML
          tagsStyles={
            this.props.darkMode
              ? { p: { color: '#ccc' } }
              : {
                  p: { textAlign: 'justify' }
                }
          }
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
    padding: 12,
    backgroundColor: '#ffffff',
    elevation: 4
  },

  Data: {
    color: 'rgb(114, 114, 142)',
    alignItems: 'stretch'
  }
});

const stylesDark = StyleSheet.create({
  Header: {
    fontSize: 22,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#ddd'
  },

  container: {
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 12,
    padding: 12,
    elevation: 4,
    backgroundColor: '#222'
  },

  Data: {
    color: '#aaa',
    alignItems: 'stretch'
  }
});

const mapStateToProps = state => ({
  darkMode: state.darkMode
});
export default connect(mapStateToProps)(NewsItem);
