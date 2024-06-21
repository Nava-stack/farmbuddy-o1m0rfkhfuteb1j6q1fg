import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import COLORS from "../constants/colors";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import CustomKeyboardView from "../components/CustomKeyboardView";
import { auth, db } from "../firebase/firebase";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";

export default function SignupScreen({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  // const generateRandomPassword = () => {
  //   const length = 10;
  //   const charset =
  //     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}'/?><";
  //   let password = "";
  //   for (let i = 0, n = charset.length; i < length; ++i) {
  //     password += charset.charAt(Math.floor(Math.random() * n));
  //   }
  //   return password;
  // };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created Successfully.");
      } catch (error) {
        alert("Account already exits, try again", error);
      }
    }
  };
  // const handleSignUp = async () => {
  //   try {
  //     setIsLoading(true);
  //     const randomPassword = generateRandomPassword();
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       randomPassword
  //     );

  //     await addDoc(collection(db, "users"), {
  //       uid: userCredential.user.uid,
  //       name: name,
  //       email: email,
  //       nic: nic,
  //     });

  //     await sendPasswordResetEmail(auth, email);
  //     alert(
  //       "Account created Successfully.Please check your email to set your password"
  //     );
  //   } catch (error) {
  //     setIsLoading(false);
  //     alert("Error creating an account: ", error.message);
  //   }
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <CustomKeyboardView>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              marginVertical: 10,
              color: COLORS.black,
            }}
          >
            Create an Account
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: COLORS.black,
            }}
          >
            Be proud to become a farmer.
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textBoxTitle}>Full Name</Text>
          <View style={styles.emailContainer}>
            <TextInput
              placeholder="kumar example"
              placeholderTextColor={COLORS.black}
              value={name}
              onChangeText={(value) => setName(value)}
              keyboardType="default"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.textBoxTitle}>Email Address</Text>
          <View style={styles.emailContainer}>
            <TextInput
              placeholder="example@gmail.com"
              placeholderTextColor={COLORS.black}
              value={email}
              onChangeText={(value) => setEmail(value)}
              keyboardType="email-address"
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
          <ExpoCheckbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>I agree to the Terms & Conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          style={{ marginBottom: 4, marginTop: 18 }}
          onPress={() => handleSubmit()}
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
          <Text>Or Sign up with</Text>
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
            onPress={() => console.log("Pressed")}
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
            onPress={() => console.log("Pressed")}
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
            Already have an Account?
          </Text>
          <Pressable onPress={() => navigation.navigate("LoginScreen")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </CustomKeyboardView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textBoxTitle: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 10,
  },
  emailContainer: {
    width: "100%",
    height: 43,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
  mobileContainer: {
    width: "100%",
    height: 43,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  mobileTextInput: {
    width: "12%",
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderLeftColor: COLORS.black,
    height: "100%",
  },
  passwordContainer: {
    width: "100%",
    height: 43,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
  },
});
