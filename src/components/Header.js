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

export default class Header extends Component {
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
          data={[
            { title: 'RSS1', link: 'link', active: true },
            { title: 'RSS2', link: 'link', active: false },
            { title: 'RSS3', link: 'link', active: false }
          ]}
          horizontal={true}
          renderItem={({ item }) =>
            item.active ? (
              <TouchableOpacity style={styles.btnWrap}>
                <Text style={styles.btnText}>{item.title}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btnWrapNotActive}>
                <Text style={styles.btnTextNotActive}>{item.title}</Text>
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.mainColor,
    padding: 16,
    paddingTop: 44,
    flexDirection: 'column',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  row: {
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
    paddingTop: 16
  },
  btnText: {
    color: 'rgba(0,0,0,0.75)',
    fontSize: 16
  },
  btnTextNotActive: {
    color: '#fff',
    fontSize: 16
  },
  btnWrap: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8
  },
  btnWrapNotActive: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8
  }
});
