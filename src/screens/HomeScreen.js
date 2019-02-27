import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.mainContainer}>
        <Text>
          {Strings.appTitle} URaL: {this.props.url}
        </Text>
        <TouchableOpacity onPress={()=> navigate("Settings") }>
          <Text>Do Ustawien</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url ? state.url : Strings.mainUrl
});

export default connect(mapStateToProps)(HomeScreen);
