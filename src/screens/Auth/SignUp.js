import { View, Text, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomizeButton from "../../components/CustomizeButton";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../config/firebase";

const SignUp = () => {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      if (email !== "" && password !== "" && username !== "") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await addDoc(collection(database, "users"), {
          uid: user.uid,
          username: username,
          email: email,
        });

        setEmail("");
        setPassword("");
        setUsername("");
        Alert.alert("Signup Successful", "You have successfully signed up!", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login", { username }),
          },
        ]);
      } else {
        Alert.alert("Signup Failed", "Please fill in all the fields.");
      }
    } catch (err) {
      Alert.alert("Signup Failed", err.message);
    }
  };

  return (
    <SafeAreaView className="h-full bg-gray-900">
      <View className="flex w-full  flex-col  h-full px-5 py-7 bg-gray-900">
        <Image
          className="w-[134px] h-[84px] object-contain mb-5"
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />
        <Text className="text-white font-bold text-[22px] mb-[20px]">
          Sign Up
        </Text>
        <View className="mb-4">
          <Text className="text-white mb-2 text-[18px]">Username</Text>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            className="bg-customBackground p-[16px] rounded-md text-[#ddd]"
            placeholder="Enter your username here"
            placeholderTextColor="#fff"
          />
        </View>
        <View className="mb-4">
          <Text className="text-white mb-2 text-[18px]">Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            className="bg-customBackground p-[16px] rounded-md text-[#ddd]"
            placeholder="Enter your Email here"
            placeholderTextColor="#fff"
          />
        </View>
        <View className="mb-10">
          <Text className="text-white mb-2 text-[18px]">Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="bg-customBackground p-[16px] rounded-md text-[#ddd]"
            placeholder="Enter your password here"
            placeholderTextColor="#fff"
            secureTextEntry={true} // Setting secureTextEntry prop to true
          />
        </View>
        <CustomizeButton title="Sign Up" onPress={handleSignup} />
        <View>
          <Text className="text-gray-50 text-center text-sm mt-2 font-bold mb-[20px] ">
            Already have an account?{" "}
            <Text
              className="text-bold text-customyellow"
              onPress={() => navigation.navigate("Login")}
            >
              LogIn
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
