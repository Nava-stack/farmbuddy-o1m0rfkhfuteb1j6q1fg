import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Platform, View } from "react-native";
import { COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import FeedScreen from "../screens/FeedScreen";
import ProfitsScreen from "../screens/ProfitsScreen";
import SpeciesScreen from "../screens/SpeciesScreen";
import SearchScreen from "../screens/SearchScreen";

export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: Platform.OS === "ios" ? 90 : 60,
      backgroundColor: COLORS.gray,
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.home : icons.homeOutline}
              resizeMode="contain"
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FeedTab"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.feedFill : icons.feed}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                height: Platform.OS === "ios" ? 70 : 60,
                width: Platform.OS === "ios" ? 70 : 60,
                top: Platform.OS === "ios" ? -20 : -30,
                borderRadius: Platform.OS === "ios" ? 35 : 30,
                borderWidth: 2,
                borderColor: COLORS.primary,
              }}
            >
              <Ionicons name="search-outline" size={24} color={COLORS.white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfitTab"
        component={ProfitsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.profitFill : icons.profit}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SpeciesTab"
        component={SpeciesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.speciesFill : icons.species}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? COLORS.primary : COLORS.black,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
