import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles =  StyleSheet.create({
        Header : {
          fontSize: 30
        },

        container: {
          
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: 'rgb(114, 114, 142)'
        }
      
});


export default class NewsItem extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.Header}>{this.props.title}</Text>
        <Text>{this.props.name} </Text>
        <Text>{this.props.date} </Text>
        <Text>{this.props.content}</Text>
      </View>
    )
  }
}







