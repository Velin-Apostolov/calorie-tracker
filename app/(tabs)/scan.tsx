import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import {
    Alert,
    AppState,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type BarcodeScanResult = {
    type: string;
    data: string;
    cornerPoints?: { x: number; y: number }[];
};

export default function ScanScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState<'back' | 'front'>('back');
    const [scanned, setScanned] = useState(false);
    const [hasCheckedPermission, setHasCheckedPermission] = useState(false);
    const isRequestingRef = useRef(false);

    useEffect(() => {
        const checkPermission = async () => {
            if (isRequestingRef.current) return;
            isRequestingRef.current = true;

            const result = await requestPermission();
            console.log('Permission:', result.status, 'Can ask again:', result.canAskAgain);
            setHasCheckedPermission(true);

            setTimeout(() => {
                isRequestingRef.current = false;
            }, 1000);
        };

        checkPermission();

        // Re-check on resume
        const subscription = AppState.addEventListener('change', (state) => {
            if (state === 'active') {
                checkPermission();
            }
        });

        return () => subscription.remove();
    }, []);

    const handleScan = ({ data, type }: BarcodeScanResult) => {
        if (!scanned) {
            setScanned(true);
            Alert.alert('Scanned', `Type: ${type}\nData: ${data}`);
            setTimeout(() => setScanned(false), 3000);
        }
    };

    const toggleFacing = () => {
        setFacing((prev) => (prev === 'back' ? 'front' : 'back'));
    };

    if (!hasCheckedPermission) {
        return (
            <SafeAreaView className="flex-1 bg-[#0f172a] items-center justify-center">
                <Text className="text-white text-lg">Checking camera permission...</Text>
            </SafeAreaView>
        );
    }

    if (permission?.status === 'denied' && !permission.canAskAgain) {
        return (
            <SafeAreaView className="flex-1 bg-[#0f172a] items-center justify-center px-6">
                <Text className="text-white text-lg text-center mb-4">
                    Camera access has been permanently denied. Please enable it manually in your system settings.
                </Text>
                <TouchableOpacity
                    onPress={() => Linking.openSettings()}
                    className="bg-blue-600 px-4 py-2 rounded-md"
                >
                    <Text className="text-white text-base">Open Settings</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    if (permission?.status === 'denied' && permission.canAskAgain) {
        return (
            <SafeAreaView className="flex-1 bg-[#0f172a] items-center justify-center px-6">
                <Text className="text-white text-lg text-center mb-4">
                    You denied camera access. Please allow it to use the scanner.
                </Text>
                <TouchableOpacity
                    onPress={() => requestPermission()}
                    className="bg-blue-600 px-4 py-2 rounded-md"
                >
                    <Text className="text-white text-base">Try Again</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    if (permission?.status !== 'granted') {
        return (
            <SafeAreaView className="flex-1 bg-[#0f172a] items-center justify-center">
                <Text className="text-white text-lg">Waiting for camera permission...</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-[#0f172a]">
            <CameraView
                className="flex-1"
                facing={facing}
                onBarcodeScanned={handleScan}
                barcodeScannerSettings={{
                    barcodeTypes: ['qr', 'ean13', 'ean8', 'upc_a', 'upc_e', 'code128'],
                }}
            />

            <View className="absolute bottom-8 w-full items-center">
                <TouchableOpacity
                    onPress={toggleFacing}
                    className="bg-white/20 px-6 py-2 rounded-full"
                >
                    <Text className="text-white text-base">
                        Flip Camera ({facing === 'back' ? 'Back' : 'Front'})
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
