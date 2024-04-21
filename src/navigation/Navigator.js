import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../views/Welcome";
import Home from "../views/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function WeatherStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export const Navigator = () => {
  return (
    <NavigationContainer>
      <WeatherStack />
    </NavigationContainer>
  );
};
