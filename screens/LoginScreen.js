import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translation } from "../components/LanguageUtils";
import Loader from "../components/Loader";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function LoginScreen({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const handleLoginFunction = () => {
    if (email !== "" && password !== "") {
      handleSubmit();
    } else {
      alert("Please enter any data!");
    }
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successfully.");
      } catch (error) {
        console.log("got error: ", error.message);
        alert("Error: Please Check your credentials");
      }
    }
  };
  useEffect(() => {
    getLang();
  }, []);

  const getLang = async () => {
    console.log(await AsyncStorage.getItem("LANG"));
    setSelectedLang(parseInt(await AsyncStorage.getItem("LANG")));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <CustomKeyboardView>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              marginVertical: 12,
              color: COLORS.black,
            }}
          >
            {selectedLang == 0
              ? translation[1].English
              : selectedLang == 1
              ? translation[1].Tamil
              : selectedLang == 2
              ? translation[1].Sinhala
              : null}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
            }}
          >
            {selectedLang == 0
              ? translation[2].English
              : selectedLang == 1
              ? translation[2].Tamil
              : selectedLang == 2
              ? translation[2].Sinhala
              : null}
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 10 }}>
            Email Address
          </Text>
          <View
            style={{
              width: "100%",
              height: 43,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 10 }}>
            Password
          </Text>
          <View
            style={{
              width: "100%",
              height: 43,
              borderColor: COLORS.black,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 20,
            }}
          >
            <TextInput
              placeholder="***********"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              value={password}
              onChangeText={(value) => setPassword(value)}
              style={{
                width: "100%",
              }}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>Always Remember Me</Text>
        </View>
        <Button
          title="Login"
          onPress={() => handleLoginFunction()}
          filled
          style={{ marginBottom: 4, marginTop: 18 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => console.log("Face book Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/images/facebook.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Google Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/images/google.png")}
              style={{ height: 36, width: 36, marginRight: 8 }}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            Don't have an Account?
          </Text>
          <Pressable onPress={() => navigation.navigate("SignupScreen")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </CustomKeyboardView>
    </SafeAreaView>
  );
}
