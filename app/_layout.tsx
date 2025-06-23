import { Stack } from 'expo-router';
import '../globals.css';

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                animation: 'slide_from_bottom',
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#0f172a',
                },
            }}
        />
    );
}
