import { NavigationActions } from "react-navigation";

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
}

const back = () => {
  _navigator.dispatch(NavigationActions.back())
}

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  back
};
