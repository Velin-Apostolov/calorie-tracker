import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#0f172a] px-4 py-6">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-6">
                <Text className="text-white text-2xl font-bold">Settings</Text>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="close" size={28} color="#94a3b8" />
                </Pressable>
            </View>

            {/* Settings Card */}
            <View className="bg-white/10 rounded-xl p-4 space-y-4">
                <Text className="text-white text-base">Calorie Goal: 2000 kcal</Text>
                <Text className="text-white text-base">Units: grams</Text>
                <Text className="text-white text-base">Theme: Dark</Text>
            </View>
        </SafeAreaView>
    );
}
