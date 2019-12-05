import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={style.container}>
        <Text> Saved </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
