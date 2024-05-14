import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomizeButton from "../../components/CustomizeButton";

const LoginScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex w-full items-center flex-col align-middle justify-center h-full px-5 bg-gray-900">
          <Image
            className="w-[134px] h-[84px] object-contain"
            resizeMode="contain"
            source={require("../../../assets/logo.png")}
          />
          <Image
            className="w-fill"
            source={require("../../../assets/img.png")}
          />
          <Text className="text-white my-[20px] text-3xl text-center font-semibold">
            Discover Endless Possibilities with Aora
          </Text>

          <Text className="text-gray-50 text-sm text-center w-[94%] font-thin mb-[20px]">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ratione debitis odit optio assumenda?
          </Text>
          <CustomizeButton
            title="Let's Get Started"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
