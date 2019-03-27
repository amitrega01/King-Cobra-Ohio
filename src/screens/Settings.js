import React, { Component } from 'react';
import { Button, TextInput, Text, StyleSheet, View } from 'react-native';
import Strings from '../consts/Strings';
import Colors from '../consts/Colors';
import { connect } from 'react-redux';

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
    return (
      <View>
        {/* nagłowek */}

        <View style={styles.header}>
          <Text style={styles.headerText}>{Strings.settings}</Text>
        </View>

        {/* TE STYLE PRZENIES NA DOL PLIKU, TAK JAK JEST TU WYZEJ czyli potem styles.nazwaTwojaJAKAS */}
        <View style={styles.body}>
          {/* TU MOZESZ DODAC POGRUBIONY ALBO TROCHE WIEKSZY TEN TEKST */}
          <Text style={styles.bodyText}>Aktualizuj co:</Text>

          {/* W SUMIE TU TEZ */}
          <TextInput
            style={styles.bodyText}
            value={this.state.interval.toString()}
            onChangeText={text => {
              this.setState({ interval: text });
            }}
            keyboardType="numeric"
          />
        </View>
        {/* TUTAJ MOZESZ DODAC MARGINES NA TEN BUTTON ZEBY NIE BYL NA CALA SZEROKOSC */}
        {/* ZOBACZ SOBIE JAK DZIALA TEN REDUX NA TYM PRZYKLADZIE  */}
        <View style={{ paddingTop: 5, paddingHorizontal: 30}}>
          <Button
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
            }}
          />
        </View>
      </View>
    );
  } 
}
//TUTAJ DODAJE TE STYLE Z GORY
const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.mainColor,
    elevation: 4,
    flexDirection: 'column',
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
    fontWeight: 'bold', 
    fontSize: 20
  }

});
//TUAJ SIE LACZY Z REDUXEM I POBIERAMY ZMIENNE Z GLOBALNEGO STANU KTORE SA NAM POTRZEBNE W TYM KOMPONENCIE
const mapStateToProps = state => ({
  interval: state.interval,
  darkMode: state.darkMode
});

export default connect(mapStateToProps)(Settings);
