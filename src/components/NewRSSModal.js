import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Modal, Button } from 'react-native';

export default class NewRSSModal extends Component {
  state = {
    text: ''
  };
  render() {
    return (
      <Modal
        style={styles.modalContent}
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={this.props.closeModal}
        onBackdropPress={this.props.closeModal}
      >
        <View style={styles.wrapper}>
          <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              placeholder="Enter RSS address"
            />
            <Button
              onPress={this.props.closeModal}
              title="Add"
              color="#841584"
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
