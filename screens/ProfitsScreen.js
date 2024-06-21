import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";

export default function ProfitsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 16 }}>
          <Header title={"Profit Tracking"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
