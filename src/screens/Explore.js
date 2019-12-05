import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              height: 70,
              backgroundColor: 'white',
              borderBottomWidth: 2,
              borderBottomColor: '#DDDDDD',
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                elevation: 2,
                marginTop: 10,
              }}>
              <Icon
                style={{marginTop: 3, marginRight: 10}}
                name="search"
                color="grey"
                size={20}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search"
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  paddingVertical: 0,
                  fontSize: 15,
                  fontWeight: '700',
                }}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                }}>
                What can we help you find, Rum?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView>
                  <View
                    style={{
                      height: 130,
                      width: 130,
                      marginLeft: 20,
                      borderWidth: 0.5,
                      borderColor: '#DDDDDD',
                    }}>
                    <View style={{flex: 2}}>
                      <Image
                        source={require('../assets/Image/Home.jpg')}
                        style={{flex: 1, width: null}}
                      />
                    </View>
                    <View style={{flex: 1, paddingTop: 10, paddingLeft: 10}}>
                      <Text>Home</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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
