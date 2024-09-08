import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { Text, View } from "react-native";

export default function HaiD() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View style={{}}>
      <Text style={{}}>Hai C</Text>
    </View>
  );
}
