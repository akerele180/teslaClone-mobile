import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = ({type, buttonName, onPress}) => {
  // const type = props.type;
  // const buttonName = props.buttonName;
  // const onPress = props.onPress;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const color = type === "primary" ? "white" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color }]}>{buttonName}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
