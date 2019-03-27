import React, { Component } from 'react';
import { Button, TextInput, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import Styles from '../consts/Styles';
export default class Settings extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View 
        style={{
          paddingHorizontal: 80, 
          paddingVertical: 300}}
        >

        <View 
          style={{
            flexDirection: 'row'}}>
          
          <Text style={{flex: 1,}}>
            Aktualizuj co:
          </Text>

          <TextInput
            style={{flex: 1}}
            maxLength = {3}
            placeholder='np. 1'
            keyboardType = 'numeric'
          />
        </View>
        
        <View style={{paddingTop: 5}}>
          <Button title="Zapisz" onPress=""></Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({});
