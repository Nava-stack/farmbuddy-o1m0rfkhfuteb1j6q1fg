import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import BottomTabNavigation from "./BottomTabNavigation";
import SpeciesScreen from "../screens/SpeciesScreen";
import FeedScreen from "../screens/FeedScreen";
import GuideScreen from "../screens/GuideScreen";
import FarmsScreen from "../screens/FarmsScreen";
import SuppliersScreen from "../screens/SuppliersScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { COLORS } from "../constants";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Account logout successful.");
  };

  const navigation = useNavigation();
  const handleProfile = () => {
    navigation.navigate("ProfileScreen");
  };
  const CustomDrawerContent = (props) => {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Image
            source={require("../assets/images/user3.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Navarasan</Text>
          <Text style={styles.profileLink} onPress={handleProfile}>
            View Profile
          </Text>
        </View>
        <DrawerItemList {...props} />
        <View style={styles.logoutContainer}>
          <Button
            title="Logout"
            onPress={handleLogout}
            filled
            style={styles.logoutButton}
          />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 15,
          marginLeft: 10,
        },
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={BottomTabNavigation}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Species"
        component={SpeciesScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "fish" : "fish-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Feeds"
        component={FeedScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "nutrition" : "nutrition-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Guidance"
        component={GuideScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Farms"
        component={FarmsScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "map" : "map-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Suppliers"
        component={SuppliersScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 220,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 999,
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 6,
  },
  profileLink: {
    fontSize: 14,
    color: COLORS.black,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
  },
  logoutButton: {
    width: "90%",
  },
});
