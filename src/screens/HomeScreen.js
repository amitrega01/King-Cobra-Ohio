import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text>
          {Strings.appTitle} URL: {this.props.url}
        </Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url ? state.url : Strings.mainUrl
});

export default connect(mapStateToProps)(HomeScreen);
