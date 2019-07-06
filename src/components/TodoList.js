import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodoAction, deleteTodoAction, visibiltyFilters } from '../redux';
import TodoItem from './TodoItem';

const filterTodos = (todos, filter) => {
      switch(filter){
         case visibiltyFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
         case visibiltyFilters.SHOW_COMPLETED:
            return todos.filter(t=> t.completed)
         default:
            return todos;
      }
}
//const TodoList = ({ todos, toggleTodo }) => {
const TodoList = () => {
   const todos = useSelector(({ myTodos, filter }) => filterTodos(myTodos.todos, filter));
   const dispatch = useDispatch();
   const toggleTodo = id => dispatch(toggleTodoAction(id));
   const deleteTodo = id => dispatch(deleteTodoAction(id));

   const _renderItem = ({ item }) => (
      <TodoItem
         todo={item}
         toggleTd={() => toggleTodo(item.id)}
         deleteTd={() => deleteTodo(item.id)}
      />
   )
   const _itemSeparator = () => (
      <View style={{ height: 0.5, backgroundColor: 'rgba(0,0,0,0.5)' }} />
   )
   const _listEmptyComp = () => (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
         <Text style={{ fontSize: 20 }}>Todo is Empty</Text>
      </View>
   )
   return (
      <FlatList
         style={{ flex: 1, marginHorizontal: 15 }}
         data={todos}
         renderItem={_renderItem}
         ItemSeparatorComponent={_itemSeparator}
         ListEmptyComponent={_listEmptyComp}
         keyExtractor={item => item.id.toString()}
      />
   )
}
/*// versi not hooks
const mapStateToProps = state => ({
   todos: state.todos
})
const mapDispatchToProps = dispatch => ({
   toggleTodo: id => dispatch(toggleTodoAction(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
*/

export default TodoList