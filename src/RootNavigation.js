import { createStackNavigator, createAppContainer} from 'react-navigation';
import TodoListScreen from './screen/TodoListScreen'
import AddTodoScreen from './screen/AddTodoScreen'
import FilterTodoScreen from './screen/FilterTodoScreen'

const rootNavigation = createStackNavigator({
   HOME_NAV : {
      screen: TodoListScreen,
      navigationOptions: {
         title: "TODO APP - REACT REDUX HOOKS"
      }
   },
   ADD_NAV : {
      screen: AddTodoScreen
   },
   FILTER_NAV:{
      screen: FilterTodoScreen,
      navigationOptions: {
         title: "FILTER TODOS"
      }
   }
})


export default createAppContainer(rootNavigation);