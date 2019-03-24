import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NewsItem from '../components/NewsItem';
export class NewsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    console.table(this.props.news);
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.props.news}
          extraData={this.props}
          renderItem={({ item }) => (
            <NewsItem
              title={item.title}
              date={item.published}
              name={item.links[0].url}
              content={item.description}
            />
          )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
