import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomePage from './component/page/HomePage';
import DetailPage from './component/page/DetailPage';

const AppNavigation = createStackNavigator(
  {
    HomePage:{screen:HomePage},
    DetailPage:{screen:DetailPage},
  },
  {
    initialRouteName:'HomePage',
  }
);

const AppContainer = createAppContainer(AppNavigation);


class App extends Component{
  render(){
    return <AppContainer/>
  }
}

export default App;
