import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles =  StyleSheet.create({
        Header : {
          fontSize: 30,
          fontWeight: 'bold',
          flexDirection: 'row'
          
        },

        container: {         
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgb(114, 114, 142)'
          
          
          
        },

        Source: {
          color: 'rgb(114, 114, 142)'
        }
      
});


export default class NewsItem extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.Header}>{this.props.title}</Text> 
        <Text style={{flexDirection: 'row'}}>{this.props.date} </Text>
        <Text style = {styles.Source}>{this.props.name} </Text>       
        <Text>{this.props.content}</Text>
      </View>
    )
  }
}







