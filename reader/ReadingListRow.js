'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image,
  Component
} = React;

function urlForQueryAndPage(key, value) {
  var data = {
      link: 'uk',
  };
  data[key] = value;

  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return 'http://api.nestoria.co.uk/api?' + querystring;
};

class ReadingListRow extends Component {

  onlinkPressed() {
    var query = linkForQueryAndPage('place_name', this.state.linkString, 1);
    this._executeQuery(query);
  }


  onlinkTextChanged(event) {
    this.setState({ linkString: event.nativeEvent.text });
  }

  render() {
    return (
      
      <TouchableHighlight underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Image source={{uri: this.props.link.image}} style={styles.linkImage}/>
          <View style={styles.textContainer}>
            <Text style={styles.linkTitle} numberOfLines={2}>{this.props.link.title}</Text>
            <Text style={styles.linkHost}>{this.props.link.host}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  linkImage: {
    backgroundColor: '#dddddd',
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  linkTitle: {
    fontWeight: 'bold',
  },
  linkHost: {
    color: '#999999',
  },
});

module.exports = ReadingListRow;
