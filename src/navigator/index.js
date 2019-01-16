import { createStackNavigator, createAppContainer } from "react-navigation";

import Preload from "../screens/Preload";
import Home from "../screens/Home";
import Login from "../screens/Login";

const AppNavigator = createStackNavigator({
    preload: {
        screen: Preload
    },
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    }
});

export default AppContainer = createAppContainer(AppNavigator);
