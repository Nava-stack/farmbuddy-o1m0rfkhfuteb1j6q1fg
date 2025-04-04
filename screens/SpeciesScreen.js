import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";

export default function SpeciesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 16 }}>
          <Header title={"Suppliers Profile"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
