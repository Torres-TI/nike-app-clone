import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ProductsDetailsScreen from "./src/Screens/ProductsDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      <ProductsDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
