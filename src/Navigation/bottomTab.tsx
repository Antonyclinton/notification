import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screen/mainScreens/home";

const BottomTab: any = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <BottomTab.Navigator initialRouteName="HOME">
            <BottomTab.Screen name="HOME" component={Home} />
            <BottomTab.Screen name="PROFILE" component={Home} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator