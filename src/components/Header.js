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
import NewRSSButton from './NewRSSButton';
import RssChannelButton from './RssChannelButton';
import NewRSSModal from './NewRSSModal';

class Header extends Component {
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={this.props.darkMode ? stylesDark.wrapper : styles.wrapper}>
        <View style={styles.row}>
          <Text style={styles.appTitleText}>{Strings.appTitle}</Text>

          {/* <NewRSSModal
            modalVisible={this.state.modalVisible}
            closeModal={() =>
              this.setState({ modalVisible: !this.state.modalVisible })
            }
          /> */}
          <View style={styles.buttonRow}>
            {/* <NewRSSButton
              onPress={() =>
                this.setState({ modalVisible: !this.state.modalVisible })
              }
            /> */}
            <TouchableOpacity
              onPress={this.props.onPress}
              style={{ paddingHorizontal: 8 }}
            >
              <Ionicons name="md-settings" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={styles.list}
          data={this.props.channels}
          horizontal={true}
          keyExtractor={item => item.id.toString()}
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
const mapStateToProps = state => ({
  darkMode: state.darkMode
});

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  wrapper: {
    backgroundColor: Colors.mainColor,
    paddingTop: 24,
    elevation: 4,
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
    paddingTop: 16,
    paddingRight: 20
  }
});
const stylesDark = StyleSheet.create({
  wrapper: {
    backgroundColor: '#222',
    paddingTop: 24,
    elevation: 4,
    flexDirection: 'column',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  }
});
