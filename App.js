import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/components/Home/HomeScreen";
import AddScreen from "./screens/components/Add/AddScreen";
const Stack = createNativeStackNavigator();
import store from "./screens/redux/store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "white" },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => (
                <Text className="text-2xl font-semibold pl-3 pt-5">
                  Welcome, Thanhhhhhhhh
                </Text>
              ),
            }}
          />

          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{
              headerTitle: () => (
                <Text className="text-2xl font-semibold pl-3">
                  Expenses Tracker
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={AddScreen}
            options={{
              headerTitle: () => (
                <Text className="text-2xl font-semibold pl-3">Chi tiết</Text>
              ),
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
