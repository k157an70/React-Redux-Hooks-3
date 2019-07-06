import React from 'react';
import { View, Button, TouchableOpacity } from 'react-native';
import TodoList from '../components/TodoList';
import Icon from 'react-native-vector-icons/MaterialIcons'

const TodoListScreen = ({ navigation }) => {
   return (
      <View style={{ flex: 1 }}>
         <TodoList />
         <Button
            title="ADD NEW TODO"
            onPress={() => navigation.navigate("ADD_NAV", {isAdd: true})}
         />
      </View>
   )
}

TodoListScreen.navigationOptions = ({ navigation }) => {
   return {
     headerRight : (
         <TouchableOpacity 
            onPress={() => navigation.navigate("FILTER_NAV")}
            style={{ marginRight: 10 }}
         >
            <Icon name="filter-list" size={25} color="black"/>
         </TouchableOpacity>
     )
   }
}

export default TodoListScreen;