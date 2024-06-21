import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { COLORS } from "../constants";
import Header from "../components/Header";

const CreateFarmScreen = ({ navigation }) => {
  const [farmType, setFarmType] = useState("");
  const [location, setLocation] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleCreateFarm = () => {
    // Handle farm creation logic here
    console.log("Farm created:", { farmType, location, area, startDate });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Header title={"Create New Farm"} />
        <Text style={styles.farmNumber}>Farm #0580</Text>
        <Text style={styles.infoText}>After creating, view it on farms</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Farm Type</Text>
          <TextInput
            style={styles.input}
            value={farmType}
            onChangeText={(text) => setFarmType(text)}
            placeholder="Enter Farm Type"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={(text) => setLocation(text)}
            placeholder="Enter Location"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Area of Farm</Text>
          <TextInput
            style={styles.input}
            value={area}
            onChangeText={(text) => setArea(text)}
            placeholder="Enter Area of Farm"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Start Date</Text>
          <TextInput
            style={styles.input}
            value={startDate}
            onChangeText={(text) => setStartDate(text)}
            placeholder="Enter Start Date"
          />
        </View>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateFarm}
        >
          <Text style={styles.createButtonText}>Create Farm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  farmNumber: {
    fontSize: 18,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  createButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CreateFarmScreen;
