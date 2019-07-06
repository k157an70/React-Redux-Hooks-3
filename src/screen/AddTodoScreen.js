import React, { useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNameTodoAction, addTodoAction, updateTodoAction } from '../redux';

const MyInput = ({ id }) => {
   const { todoEdit, name } = useSelector(state => ({
      todoEdit: state.todos.find(t => t.id === id),
      name: state.name
   }));
   const dispatch = useDispatch();
   const onChangeName = name => dispatch(changeNameTodoAction(name));

   useEffect(() => {
      id && onChangeName(todoEdit.name);
      // unmount
      return () => {
         onChangeName('');
      }
   }, [])
   return (
      <TextInput
         value={name}
         onChangeText={val => onChangeName(val)}
         placeholder={'Name of Todo'}
         underlineColorAndroid={'darkblue'}
         style={{ paddingHorizontal: 10, fontSize: 25 }}
      />
   )
}
const AddTodoScreen = ({ navigation }) => {
   const id = navigation.getParam('id', null);
   const dispatch = useDispatch();
   return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
         <MyInput id={id} />
         <Button
            title={id ? 'UPDATE' : 'SAVE'}
            onPress={() => {
               dispatch(id ? updateTodoAction(id) : addTodoAction());
               navigation.navigate('HOME_NAV')
            }}
      />
      </View>
   )
}

AddTodoScreen.navigationOptions = ({ navigation }) => {
   const isAdd = navigation.getParam('isAdd', false);
   const title = (isAdd ? 'ADD' : 'EDIT') + ' TODO';
   return {
      title
   }
}

export default AddTodoScreen;