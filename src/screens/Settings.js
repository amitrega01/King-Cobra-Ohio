import React, { Component } from 'react';
import {
  Button,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import Strings from '../consts/Strings';
import Colors from '../consts/Colors';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

class Settings extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      interval: this.props.interval / 3600000,
      darkMode: this.props.darkMode
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigate('Home')}
            style={{ paddingVertical: 16, paddingLeft: 16 }}
          >
            <Ionicons name="md-arrow-back" size={32} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{Strings.settings}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>Aktualizuj co:</Text>
          <TextInput
            style={styles.bodyText}
            value={this.state.interval.toString()}
            onChangeText={text => {
              this.setState({ interval: text });
            }}
            keyboardType="numeric"
          />
        </View>
        <View style={{ paddingTop: 5, paddingHorizontal: 30 }}>
          <Button
            color={Colors.mainColor}
            title="Zapisz"
            onPress={() => {
              this.props.dispatch({
                type: 'SET_INTERVAL',
                newInterval: (this.state.interval * 3600000).toString()
              });
              this.props.dispatch({
                type: 'TOOGLE_DARKMODE',
                darkMode: this.state.darkMode
              });
              navigate('Home');
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mainColor,
    elevation: 4,
    flexDirection: 'row',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 24
  },
  headerText: {
    padding: 16,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    letterSpacing: 5
  },
  body: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 0.25,
    borderColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'space-between'
  },
  bodyText: {
    fontSize: 20
  }
});
//TUAJ SIE LACZY Z REDUXEM I POBIERAMY ZMIENNE Z GLOBALNEGO STANU KTORE SA NAM POTRZEBNE W TYM KOMPONENCIE
const mapStateToProps = state => ({
  interval: state.interval,
  darkMode: state.darkMode
});

export default connect(mapStateToProps)(Settings);
