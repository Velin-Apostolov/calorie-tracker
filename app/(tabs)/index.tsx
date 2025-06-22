import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0f172a]">
      <StatusBar style="light" translucent />
      <SafeAreaView className="flex-1">
        {/* Top Bar */}
        <View className="flex-row justify-end px-4 pt-4">
          <Pressable onPress={() => router.navigate("/settings")}>
            <Ionicons name="settings-outline" size={26} color="#94a3b8" />
          </Pressable>
        </View>

        <View className="flex-1 px-4 py-6">
          {/* Progress Ring */}
          <View className="w-56 h-56 rounded-full bg-[#1e3a8a] opacity-70 mx-auto justify-center items-center">
            <Text className="text-white text-4xl font-bold">850</Text>
            <Text className="text-white text-sm">/ 2000</Text>
          </View>

          {/* Food Card */}
          <View className="mt-10 bg-white/10 rounded-2xl p-4">
            <Text className="text-white text-lg font-semibold mb-2">Food</Text>
            <View className="flex-row justify-between mb-1">
              <Text className="text-white">Yogurt</Text>
              <Text className="text-white">150 c</Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text className="text-white">Banana</Text>
              <Text className="text-white">110 c</Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text className="text-white">Chicken</Text>
              <Text className="text-white">300 c</Text>
            </View>
          </View>

          {/* Add Food Button */}
          <Pressable
            className="mt-6 bg-blue-500 rounded-full py-3 px-6 self-center shadow-lg"
            onPress={() => router.push("/log")}
          >
            <Text className="text-white text-lg font-semibold">+ Add Food</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
