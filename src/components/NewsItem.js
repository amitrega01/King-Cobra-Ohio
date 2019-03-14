import React, { Component } from 'react'
import { Text, View } from 'react-native'


export default class NewsItem extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 15, fontWeight:"bold"}}>{this.props.title}</Text>
        <Text>{this.props.name} </Text>
        <Text>{this.props.date} </Text>
        <Text>{this.props.content}</Text>
      </View>
    )
  }
}





