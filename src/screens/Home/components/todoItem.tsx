import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = props => {
  const {item, onPress} = props;
  const styles = myStyles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemContainer}>
        <Text>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;

const myStyles = StyleSheet.create({
  itemContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 50,
    borderWidth: 0.2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
