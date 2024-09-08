import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HaiA from "./screens/HaiA";
import { PaperProvider } from "react-native-paper";
import HaiB from "./screens/HaiB";

const RootStack = createNativeStackNavigator({
  screens: {
    HaiA: HaiA,
    HaiB: HaiB,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
