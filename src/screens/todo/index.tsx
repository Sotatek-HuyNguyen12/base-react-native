import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {todoActions, todoSelector} from 'reduxSaga/todo/todoSlice';
import TodoItem from './components/todoItem';

const TodoScreen = () => {
  const styles = myStyles;
  const dispatch = useDispatch();
  const todoList = useSelector(todoSelector);
  const [task, setTask] = useState<string>('');

  const handleAddTodo = () => {
    const todo = {id: new Date().getTime(), task: task};
    dispatch(todoActions.addTodo(todo));
    setTask('');
  };

  const handleDeleteTodo = item => {
    dispatch(todoActions.deleteTodo(item));
    setTask('');
  };

  const renderItem = ({item}) => (
    <TodoItem item={item} onPress={() => handleDeleteTodo(item)} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={setTask}
          placeholder="Todo"
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity
          disabled={!task}
          style={styles.button}
          onPress={handleAddTodo}>
          <Text style={styles.btnText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item, index) => `${item.id}_${index.toString()}`}
          data={todoList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    paddingTop: '15%',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    width: 240,
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    color: '#000000',
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
    borderRadius: 25,
    height: 50,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
  },
  listContainer: {
    width: '100%',
    height: '100%',
  },
});

export default TodoScreen;
