import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Strings from '../consts/Strings';
import Colors from '../consts/Colors';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import RssChannelButton from './RssChannelButton';
class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.appTitleText}>{Strings.appTitle}</Text>
          <TouchableOpacity onPress={this.props.onPress}>
            <Ionicons name="md-settings" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.list}
          data={this.props.channels}
          horizontal={true}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <RssChannelButton
              callback={this.props.callback}
              name={item.name}
              fullName={item.fullName}
              isActive={item.isActive}
              id={item.id}
            />
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.mainColor,
    paddingTop: 24,
    flexDirection: 'column',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  row: {
    padding: 16,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row'
  },
  appTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    letterSpacing: 5
  },
  list: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 16
  }
});
