import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomizeButton from "../../components/CustomizeButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { auth, database } from "../../config/firebase";
const AddItem = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async () => {
    try {
      const user = auth.currentUser; 
      if (user) {
        const uid = user.uid; 
        const docRef = await addDoc(collection(database, "items"), {
          title,
          description,
          userId: uid, 
        });
        console.log("Document written with ID line no 17: ", docRef.id);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <SafeAreaView className="h-full bg-gray-900">
      <View className="flex w-full  flex-col  h-full px-0 py-7 bg-gray-900">
        <View className="flex px-5 gap-3 items-center flex-row w-full mb-10">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="chevron-back-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-[22px] mb-[0px]">
            Upload Item
          </Text>
        </View>

        <View className="px-5">
          <View className="mb-4 ">
            <Text className="text-white mb-2 text-[18px]">Item Title</Text>
            <TextInput
              className="bg-customBackground p-[16px] rounded-md text-[#ddd]"
              placeholder="Give your item a catchy title..."
              placeholderTextColor="#fff"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View className="mb-4">
            <Text className="text-white mb-2 text-[18px]">
              Item Description
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={10}
              className="bg-customBackground px-[16px] rounded-md text-[#ddd]"
              placeholder="Give your item a catchy title..."
              placeholderTextColor="#fff"
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <CustomizeButton
            title="Submit & Publish"
            onPress={handleFormSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddItem;
