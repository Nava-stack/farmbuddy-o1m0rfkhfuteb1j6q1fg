import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, icons } from "../constants";

export default function Header({ title, onPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.toggleDrawer()}
        >
          <Image resizeMode="contain" style={styles.icon} source={icons.menu} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginLeft: 12,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={icons.bellOutline}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    marginHorizontal: 8,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray,
  },
  icon: {
    height: 25,
    width: 25,
    tintColor: COLORS.black,
  },
});
