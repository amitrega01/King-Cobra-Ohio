import React, { Component } from 'react';
import { Modal, Button, Text, TextInput ,StyleSheet, View, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import Strings from '../consts/Strings';
import Styles from '../consts/Styles';
import { connect } from 'react-redux';
import NewRSSButton from '../components/NewRSSButton';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    
  };
  state = {
    modalVisible: false,
  };
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
      
    }
  

  render() {
    
    const {navigate} = this.props.navigation;
    return (
      
      <View style={Styles.mainContainer}>
        <Text>
          {Strings.appTitle} URL: {this.props.url}
        </Text>
        <TouchableOpacity onPress={()=> navigate("Settings") }>
          <Text>Settings</Text>
        </TouchableOpacity>
        <Modal
          
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View>
            <View>
              <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                    placeholder="Enter RSS address"
                  />
              <Button onPress={()=> {this.setModalVisible(!this.state.modalVisible)}} title="Add" color="#841584"/>
            </View>
          </View>
        </Modal>
        <NewRSSButton onPress={()=> {this.setModalVisible(this.state.modalVisible)}}/>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  url: state.url ? state.url : Strings.mainUrl
});

export default connect(mapStateToProps)(HomeScreen);
