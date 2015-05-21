'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var Reflux = require('reflux');

var TodoActions = require('../Actions/TodoActions');

module.exports = React.createClass({
  render: function() {
    var todo = this.props.todo;
    var styleTodoItemComplete = (todo.complete) ? styles.todoItemComplete : null;
    return (
      <View>
        <View style={[styles.todoItem, styleTodoItemComplete]}>
          <Text style={styles.text}>{todo.text}</Text>
          <Text style={styles.text}>{todo.complete}</Text>
          <Text style={styles.btns} onPress={() => this._onToggleComplete(todo)}>DONE</Text>
          <Text style={styles.btns} onPress={() => this._onDestroy(todo)}>DELETE</Text>
        </View>
        <View style={styles.separator} />
      </View>
    );
  },

  _onToggleComplete: function(todo) {
    if (todo.complete) {
      TodoActions.todoUndoComplete(todo.id);
    } else {
      TodoActions.todoComplete(todo.id);
    }
  },
  _onDestroy: function(todo) {
    TodoActions.todoDestroy(todo.id);
  }
});

var styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
    padding: 10,
    height: 58,
  },
  todoItemComplete: {
    opacity: 0.3,
  },
  text: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    color: 'white',
  },
  separator: {
    height: 5,
    backgroundColor: 'peru',
  },
  btns: {
    margin: 5,
    color:'white',
    borderColor: 'peru',
    borderRadius: 5,
    borderWidth: 2,
    padding: 5,
    textAlign: 'center',
  }
});
