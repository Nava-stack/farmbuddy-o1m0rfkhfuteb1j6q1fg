import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Alert,
} from "react-native";
import { COLORS } from "../constants";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const FarmItem = ({ farmId, isActive, onPress }) => {
  return (
    <TouchableOpacity style={styles.farmItem} onPress={onPress}>
      <View style={styles.farmImageContainer}>
        <Image
          source={require("../assets/images/placeholder.jpeg")}
          style={styles.farmImage}
        />
      </View>
      <View style={styles.farmInfo}>
        <Text style={styles.farmId}>Farm #{farmId}</Text>
        {isActive && <Text style={styles.farmStatus}>Active</Text>}
      </View>
    </TouchableOpacity>
  );
};

const FarmsScreen = () => {
  const [farms, setFarms] = useState([
    { id: "0010", isActive: true },
    { id: "0009", isActive: true },
    { id: "0008", isActive: true },
    // ... more farms
  ]);
  const navigation = useNavigation();

  const handleCreateNewFarm = () => {
    navigation.navigate("CreateFarmScreen");
    // Alert.alert(
    //   "Remove Species",
    //   `Do you want to remove this Species?`,
    //   [
    //     {
    //       text: "Cancel",
    //       style: "cancel",
    //     },
    //     {
    //       text: "Remove",
    //       style: "destructive",
    //       onPress: () => {
    //         // Call API or perform deletion logic here
    //         alert("Your profile updated succesfully");
    //       },
    //     },
    //   ],
    //   { cancelable: false }
    // );
  };
  // alert("Farm updated Successfully");
  // Alert.alert(
  //   "Delete Farm",
  //   `Are you sure you want to delete this Farm?`,
  //   [
  //     {
  //       text: "Cancel",
  //       style: "cancel",
  //     },
  //     {
  //       text: "Delete",
  //       style: "destructive",
  //       onPress: () => {
  //         // Call API or perform deletion logic here
  //         alert("Farm Deleted Successfully");
  //       },
  //     },
  //   ],
  //   { cancelable: false }
  // );

  const handleViewProfile = (farmId) => {
    // Navigate to farm profile
    console.log(`View profile for farm ${farmId}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Header title={"Farms"} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently viewed</Text>
          <View style={styles.recentlyViewed}>
            <FarmItem
              farmId="0010"
              isActive={true}
              onPress={() => handleViewProfile("0010")}
            />
            <FarmItem
              farmId="0101"
              isActive={true}
              onPress={() => handleViewProfile("0101")}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Farms</Text>
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleCreateNewFarm}
          >
            <Text style={styles.createButtonText}>+ Create New Farm</Text>
          </TouchableOpacity>
          <View style={styles.farmsList}>
            {farms.map((farm) => (
              <FarmItem
                key={farm.id}
                farmId={farm.id}
                isActive={farm.isActive}
                onPress={() => handleViewProfile(farm.id)}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recentlyViewed: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 5,
    marginBottom: 16,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  farmsList: {},
  farmItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 5,
  },
  farmImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 16,
  },
  farmImage: {
    width: "100%",
    height: "100%",
  },
  farmInfo: {
    flex: 1,
  },
  farmId: {
    fontSize: 16,
    fontWeight: "bold",
  },
  farmStatus: {
    fontSize: 14,
    color: "#888",
  },
});

export default FarmsScreen;
