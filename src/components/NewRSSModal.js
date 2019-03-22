import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal, Button } from 'react-native'

export default class NewRSSModal extends Component {
  render() {
    return (
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
    )
  }
}

const styles = StyleSheet.create({})
