import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        model={"S"}
        imageName={require("./assets/images/ModelS.jpeg")}
        tagline={"Starting at 1,234"}
      />
      <CarItem
        model={"X"}
        imageName={require("./assets/images/ModelX.jpeg")}
        tagline={"You can also"}
        taglineCTA={"Order Online"}
      />
      <CarItem
        model={"Y"}
        imageName={require("./assets/images/ModelY.jpeg")}
        tagline={"You can also"}
        taglineCTA={"Order Online"}
      />
      <CarItem
        model={"3"}
        imageName={require("./assets/images/Model3.jpeg")}
        tagline={"You can also"}
        taglineCTA={"Order Online"}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
