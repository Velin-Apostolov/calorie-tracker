import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ScanScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#0f172a] items-center justify-center">
            <Text className="text-white text-xl font-bold">Scan Barcode</Text>
            <Text className="text-white mt-2">Camera placeholder here</Text>
        </SafeAreaView>
    );
}
