import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";

export default function HomeScreen() {
  const [farms, setFarms] = useState([
    { id: 1, name: "Farm #0010", time: "13m ago" },
    { id: 2, name: "Farm #0008", time: "20m ago" },
  ]);

  const handleCreateFarm = () => {
    // Implement logic to create a new farm
    console.log("Creating new farm...");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Header title={"Welcome Buddy"} />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Farms</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>1.2M</Text>
            <Text style={styles.statLabel}>Overall Profit</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Suppliers</Text>
          </View>
        </View>
        <ScrollView>
          <Text style={styles.sectionTitle}>Market Trending Species</Text>
          <View style={styles.speciesContainer}>
            <View style={styles.speciesItem}>
              <Image
                source={require("../assets/images/chicken2.png")}
                style={styles.speciesIcon}
              />
            </View>
            <View style={styles.speciesItem}>
              <Image
                source={require("../assets/images/chicken1.png")}
                style={styles.speciesIcon}
              />
            </View>
            <View style={styles.speciesItem}>
              <Image
                source={require("../assets/images/chicken3.png")}
                style={styles.speciesIcon}
              />
            </View>
            <View style={styles.speciesItem}>
              <Image
                source={require("../assets/images/rabbit1.png")}
                style={styles.speciesIcon}
              />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Farms</Text>
          <View style={styles.farmsContainer}>
            {farms.map((farm) => (
              <TouchableOpacity key={farm.id} style={styles.farmItem}>
                <View style={styles.farmIconContainer}>
                  <Image
                    source={require("../assets/images/fish1.png")}
                    style={styles.farmIcon}
                  />
                </View>
                <Text style={styles.farmName}>{farm.name}</Text>
                <Text style={styles.farmTime}>{farm.time}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={handleCreateFarm}
            style={styles.createFarmButton}
          >
            <Text style={styles.createFarmButtonText}>+ Create New Farm</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Trending high quality feeds</Text>
          <View style={styles.feedsContainer}>
            <View style={styles.feedItem}>
              <Image
                source={require("../assets/images/feed1.jpeg")}
                style={styles.feedImage}
              />
            </View>
            <View style={styles.feedItem}>
              <Image
                source={require("../assets/images/feed2.png")}
                style={styles.feedImage}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.gray,
    borderRadius: 15,
  },
  stat: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  speciesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  speciesItem: {
    alignItems: "center",
  },
  speciesIcon: {
    width: 50,
    height: 50,
  },
  farmsContainer: {
    paddingHorizontal: 20,
  },
  farmItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 5,
  },
  farmIconContainer: {
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 50,
    marginRight: 10,
  },
  farmIcon: {
    width: 24,
    height: 24,
  },
  farmName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  farmTime: {
    fontSize: 12,
    color: "#999",
  },
  createFarmButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  createFarmButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  feedsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  feedItem: {
    alignItems: "center",
  },
  feedIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    alignItems: "flex-end",
  },
  feedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
