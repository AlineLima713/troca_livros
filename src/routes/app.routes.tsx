import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../pages/Welcome";
import { Login } from "../pages/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="login" component={Login} />
    </Navigator>
  )
}