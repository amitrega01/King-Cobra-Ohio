import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class NewRSSButton extends Component {
  render() {
    return (
      <View>
        <Button style={{marginTop: 22}} onPress={this.props.onPress} title="+" color="#841784"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
