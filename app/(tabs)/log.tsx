import { Pressable, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LogScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#0f172a] px-4 py-6">
            <Text className="text-white text-xl font-bold mb-4">Log New Food</Text>

            <TextInput
                placeholder="Food name"
                placeholderTextColor="#94a3b8"
                className="bg-white/10 text-white px-4 py-3 rounded-xl mb-4"
            />
            <TextInput
                placeholder="Calories"
                keyboardType="numeric"
                placeholderTextColor="#94a3b8"
                className="bg-white/10 text-white px-4 py-3 rounded-xl mb-4"
            />

            <Pressable className="bg-blue-500 rounded-full py-3 px-6 self-start">
                <Text className="text-white text-lg font-semibold">Save</Text>
            </Pressable>
        </SafeAreaView>
    );
}
