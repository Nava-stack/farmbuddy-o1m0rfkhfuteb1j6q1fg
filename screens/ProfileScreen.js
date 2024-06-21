import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { COLORS } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome"; // Importing icons

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nic, setNic] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleUpdateProfile = () => {
    console.log("Update profile button clicked!");
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("NIC:", nic);
    console.log("Mobile number:", mobileNumber);
    alert("Profile updated Successfully");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Header title={"My Profile"} />

        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/images/user3.jpg")}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Icon name="camera" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>NIC:</Text>
          <TextInput
            style={styles.input}
            value={nic}
            onChangeText={setNic}
            placeholder="Enter your NIC"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile:</Text>
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Enter your mobile number"
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="pencil" size={20} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.updateButton}
          onPress={handleUpdateProfile}
        >
          <Text style={styles.updateButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 90,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 3,
    fontSize: 16,
    marginLeft: 10,
  },
  editIcon: {
    padding: 5,
  },
  updateButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
