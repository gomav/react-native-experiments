var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
var Camera = require('react-native-camera');

var camera = React.createClass({
  getInitialState() {
    return {
      cameraType: Camera.constants.Type.front
    }
  },

  render() {

    return (
      <Camera
        ref="cam"
        style={styles.container}
        onBarCodeRead={this._onBarCodeRead}
        type={this.state.cameraType}
      >
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        
        <TouchableHighlight onPress={this._switchCamera}>
          <Text>The old switcheroo</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._takePicture}>
          <Text>Take Picture</Text>
        </TouchableHighlight>
      </Camera>
    );
  },
  _onBarCodeRead(e) {
    console.log(e);
  },
  _switchCamera() {
    var state = this.state;
    state.cameraType = state.cameraType === Camera.constants.Type.back
      ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  },
  _takePicture() {
    this.refs.cam.capture(function(err, data) {
      console.log(err, data);
    });
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
  },
});

AppRegistry.registerComponent('camera', () => camera);