import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ShoppingCart from "./src/Screens/ShoppingCart";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      {/* <ProductsDetailsScreen /> */}
      <ShoppingCart />
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
