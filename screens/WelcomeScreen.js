import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LanguageModal from "./LanguageModal";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translation } from "../components/LanguageUtils";

export default function WelcomeScreen({ navigation }) {
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const saveSelectedLang = async (index) => {
    await AsyncStorage.setItem("LANG", index + "");
  };
  return (
    <LinearGradient
      style={styles.GradientView}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1, marginTop: 35 }}>
        <TouchableOpacity
          style={styles.selectLangaugeBtn}
          onPress={() => {
            setLangModalVisible(!langModalVisible);
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: 16 }}>
            Select Language
          </Text>
        </TouchableOpacity>
        <LanguageModal
          langModalVisible={langModalVisible}
          setLangModalVisible={setLangModalVisible}
          onSelectLang={(x) => {
            setSelectedLang(x);
            saveSelectedLang(x);
          }}
        />

        {/* content  */}

        <View>
          <Image
            source={require("../assets/images/Farmer-bro.png")}
            style={styles.Image1}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 370,
            width: "100%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            {selectedLang == 0
              ? translation[0].English
              : selectedLang == 1
              ? translation[0].Tamil
              : selectedLang == 2
              ? translation[0].Sinhala
              : null}
          </Text>

          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              {selectedLang == 0
                ? translation[3].English
                : selectedLang == 1
                ? translation[3].Tamil
                : selectedLang == 2
                ? translation[3].Sinhala
                : null}
            </Text>
          </View>

          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignupScreen")}
            style={{
              marginTop: 16,
              width: "100%",
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              {selectedLang == 0
                ? translation[4].English
                : selectedLang == 1
                ? translation[4].Tamil
                : selectedLang == 2
                ? translation[4].Sinhala
                : null}
            </Text>
            <Pressable onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.pressableText}>
                {" "}
                {selectedLang == 0
                  ? translation[5].English
                  : selectedLang == 1
                  ? translation[5].Tamil
                  : selectedLang == 2
                  ? translation[5].Sinhala
                  : null}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  GradientView: { flex: 1 },
  pressableText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 4,
  },
  selectLangaugeBtn: {
    width: "40%",
    height: 50,
    borderColor: COLORS.white,
    borderWidth: 2,
    borderRadius: 10,
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  Image1: {
    height: 270,
    width: 300,
    marginTop: 70,
    marginHorizontal: 60,
    position: "absolute",
    top: 10,
  },
});
