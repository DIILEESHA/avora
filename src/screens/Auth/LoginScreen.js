import { View, Text, Image, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomizeButton from "../../components/CustomizeButton";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          Alert.alert("SignIn Successful", "You have successfully signedIn!", [
            { text: "OK", onPress: () => navigation.navigate("Home") },
          ]);
        })
        .catch((err) => Alert.alert("Signup Failed", err.message));
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
          Sign In
        </Text>

        <View className="mb-4">
          <Text className="text-white mb-2 text-[18px]">Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            secureTextEntry={true}
          />
        </View>
        <CustomizeButton onPress={handleLogin} title="Log In" />
        <View>
          <Text className="text-gray-50 text-center text-sm mt-2 font-bold mb-[20px] ">
            Don’t have an account?{" "}
            <Text
              className="text-bold text-customyellow"
              onPress={() => navigation.navigate("SignUp")}
            >
              Signup
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
