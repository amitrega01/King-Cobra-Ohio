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
          borderColor: 'rgb(114, 114, 142)',
          padding: 10,
             
          
        },

        Source: {
          color: 'rgb(114, 114, 142)'
        },

        Data: {
          color: 'rgb(114, 114, 142)',
          alignItems: 'stretch'
        },
        
        Shadow: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 4,
        }
      
        
});


export default class NewsItem extends Component {
  render() {
    
    return (
      <View style = {[styles.container, styles.Shadow]}>
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







