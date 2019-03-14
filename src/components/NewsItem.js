import React, { Component } from 'react'
import { Text, View } from 'react-native'


class Header extends Component {
  render() {
    return (
      <View >
        <Text style={{fontSize: 15, fontWeight:"bold"}}>{this.props.title}</Text>
      </View>
    )
  }
}

class Link extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 15}}>{this.props.name}</Text>
      </View>
    )
  }
}

class Date extends Component {
  render() {
    return (
      <View>
        <Text style = {{fontSize: 10}}>{this.props.date}</Text>
      </View>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 12}}>{this.props.content}</Text>
      </View>
    )
  }
}


export default class NewsItem extends Component {
  render() {
    return (
      <View>
        <Header title = 'aaaaaa' />
        <Link name = 'onet.pl'/>
        <Date date = '09.09.2018'/>
        <Content content = 'jdanskjdhakjsdhakjsdhkajs aksjdhjaak'/>
      </View>
    )
  }
}
