import * as React from "react";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import UberScreen from "./screens/dashboard/UberScreen";
import LeaveScreen from "./screens/dashboard/LeaveScreen";
import CameraScreen from "./screens/dashboard/CameraScreen";

// const LogInStack = createStackNavigator(
//   {
//     Login: { screen: UberScreen },
//     Leave: { screen: LeaveScreen },
//     Camera: { screen: CameraScreen }
//   },
//   {
//     initialRouteName: "Leave"
//   }
// );

const drawerNavigation = createDrawerNavigator(
  {
    Uber: { screen: UberScreen },
    LeaveApp: { screen: LeaveScreen },
    Camera: { screen: CameraScreen }
  },
  { initialRouteName: "Uber" }
);

export default createAppContainer(drawerNavigation);
