import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HistoryScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#0f172a] px-4 py-6">
            <Text className="text-white text-xl font-bold mb-4">History</Text>
            <Text className="text-white">🗓️ Calendar or log list placeholder</Text>
        </SafeAreaView>
    );
}
