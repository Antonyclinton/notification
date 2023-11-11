import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screen/mainScreens/home";
import BottomTabNavigator from "./bottomTab";



const Drawer = createDrawerNavigator();
const DrawerNavigator = (props: any) => {

    return (
        <Drawer.Navigator initialRouteName="HOME">
            <Drawer.Screen name="HOME" component={BottomTabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;