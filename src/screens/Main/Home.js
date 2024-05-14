import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { collection, getDocs, where, query } from "firebase/firestore";
import { database, auth } from "../../config/firebase";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchPosts();
    fetchUsername();
  }, []);

  const fetchPosts = async () => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const q = query(
        collection(database, "items"),
        where("userId", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setPosts(data);
    }
  };

  const fetchUsername = async () => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const q = query(
        collection(database, "users"),
        where("userId", "==", uid)
      );
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      console.log(data);
      setUsers(data);
    }
  };

  // const fetchUsername = async () => {
  //   const user = auth.currentUser;
  //   if (user) {
  //     const uid = user.uid;
  //     const userDoc = await getDocs(
  //       query(collection(database, "users"), where("userId", "==", uid))
  //     );
  //     if (!userDoc.empty) {
  //       setUsername(userDoc.docs[0].data().username);
  //       console.log(setUsername);
  //     }
  //   }
  // };

  const reloadHomeData = async () => {
    await fetchPosts();
    await fetchUsername();
  };

  useFocusEffect(
    React.useCallback(() => {
      reloadHomeData();
    }, [])
  );

  return (
    <SafeAreaView className="h-full bg-gray-900">
      <View className="flex w-full   flex-col justify-between align-middle mt-0   px-5 py-0 bg-gray-900">
        <View className="flex w-full border-gray-100  flex-row justify-between align-middle items-center mt-7 h-fill  mb-5">
          <View>
            <Text className="text-gray-50 text-sm  font-thin mb-[0px]">
              Welcome back
            </Text>
            {/* Display the fetched username */}
            <Text className="text-gray-50 text-3xl  font-thin mb-[20px]">
              {/* {users.map((suser) => ( */}
              {/* // <>{suser?.username}</> */}
              {/* ))} */}
              Again
            </Text>
          </View>
          <View>
            <TouchableOpacity
              className="flex items-center "
              onPress={() => navigation.navigate("Add")}
            >
              <Ionicons
                size={50}
                name="add-circle-sharp"
                color="rgba(255, 144, 1, 1)"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        {posts.map((post) => (
          <>
            <View key={post.id} className="p-5 ">
              <View className="flex flex-row justify-between items-center w-full">
                <View className="flex flex-row gap-3 items-center ">
                  <View>
                    <Image
                      style={{
                        borderColor: "rgba(255, 144, 1, 1)",
                        borderWidth: 2,
                      }}
                      className="rounded-md border-yellow-400"
                      source={require("../../../assets/Rectangle.png")}
                    />
                  </View>
                  <View>
                    <Text className="text-[#fff] text-[14px] font-bold ">
                      {/* {post.title.slice(0, 20)} */}
                      {post.title.length > 20
                        ? `${post.title.slice(0, 20)}...`
                        : post.title}
                    </Text>
                    <Text className="text-gray-50 text-sm  font-thin">
                      Brandon Etter
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    className="rounded-md border-yellow-400"
                    source={require("../../../assets/more.png")}
                  />
                </View>
              </View>

              <View className="w-full mt-3">
                <Text className="text-white font-thin text-sm ">
                  {post?.description.length > 60
                    ? `${post.description.slice(0, 100)}...`
                    : post.description}
                </Text>
              </View>
            </View>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
