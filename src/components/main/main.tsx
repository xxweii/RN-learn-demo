/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Home from '../home/home'
import My from '../my/my'

export default class Main extends Component {
  // constructor(props) {
  //   super(props)
    state = {
      selectedTab: 'home'
    }

  // }

  renderTabNavigatorItem(title: String, selectedTab:String, component: any) {

    return (
      // <TabNavigator.Item
      //   // selected={this.state.selectedTab === selectedTab}
      //   title={'title'}
      //   selectedTitleStyle={{ color: 'black' }}
      //   // renderIcon={() => <Image source={...} />}
      //   // renderSelectedIcon={() => <Image source={...} />}
      //   badgeText="1"
      //   onPress={() => { this.setState({ selectedTab: selectedTab }) }}>
      //   {component}
      // </TabNavigator.Item>
      <View>
        <Text>LOVE TOU ❤️</Text>
      </View>
    )
  }

  render() {
    return (
      <TabNavigator>
        {this.renderTabNavigatorItem('首页', 'home', Home)}
        {this.renderTabNavigatorItem('我的', 'my', My)}
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
