import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles =  StyleSheet.create({
        Header : {
          fontSize: 30,
          fontWeight: 'bold',
          flexDirection: 'row',
          justifyContent: 'space-between'
          
        },

        container: {         
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgb(114, 114, 142)'         
          
        },

        Source: {
          color: 'rgb(114, 114, 142)'
        },

        Data: {
          color: 'rgb(114, 114, 142)',
          alignItems: 'stretch'
        }       
      
});


export default class NewsItem extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.Header}>{this.props.title}</Text> 
          <Text style={styles.Data}>{this.props.date}</Text>
        </View>
        <Text style = {styles.Source}>{this.props.name} </Text>       
        <Text>{this.props.content}</Text>
      </View>
    )
  }
}







