import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

export default function CarItem({ model, imageName, tagline, taglineCTA }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={imageName} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model {model} </Text>
        <Text style={styles.subtitle}>
          {tagline} {""}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          buttonName="custom order"
          onPress={() => console.warn("primary was pressed")}
        />
        <StyledButton
          type="secondary"
          buttonName="existing inventory"
          onPress={() => console.warn("secondary was pressed")}
        />
      </View>
    </View>
  );
}
