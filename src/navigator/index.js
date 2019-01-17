import { createStackNavigator, createAppContainer } from "react-navigation";

import Preload from "../screens/Preload";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";

const AppNavigator = createStackNavigator({
    preload: {
        screen: Preload
    },
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    SignUp: {
        screen: SignUp
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
