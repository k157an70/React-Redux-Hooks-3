import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation'

const TodoItem = ({ navigation, todo, toggleTd, deleteTd }) => {
   return (
      <TouchableOpacity
         onPress={toggleTd}
         style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
      >
         <Text
            style={[
               { fontSize: 20, lineHeight: 40 },
               { textDecorationLine: todo.completed ? 'line-through' : 'none' }
            ]}
         >
            {todo.name}
         </Text>
         <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={deleteTd}>
               <Icon name="delete" size={20} color="darkred" />
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => navigation.navigate('ADD_NAV', {id : todo.id })}
               style={{ marginHorizontal: 5 }}
            >
               <Icon name="edit" size={20} color="darkblue" />
            </TouchableOpacity>
         </View>
      </TouchableOpacity>
   )
}

export default withNavigation(TodoItem);