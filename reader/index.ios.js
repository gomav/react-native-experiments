/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var ReadingListScreen = require('./ReadingListScreen');


var reader = React.createClass({
  render: function() {
    return (
     <NavigatorIOS
        style={styles.navigator}
        initialRoute={{
          title: 'Your new title List',
          component: ReadingListScreen,
        }}/>
    );
    
  }
});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
    backgroundColor: 'peru',
    color: 'white',
  },
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

AppRegistry.registerComponent('reader', () => reader);
