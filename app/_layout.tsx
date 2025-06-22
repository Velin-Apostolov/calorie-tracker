import { DarkTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import '../globals.css';

const MyDarkTheme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#0f172a', // your custom background
        card: '#0f172a',
        text: '#ffffff',
        border: 'transparent',
        primary: '#3b82f6',
    },
};

export default function RootLayout() {
    return (
        <ThemeProvider value={MyDarkTheme}>
            <Stack
                screenOptions={{
                    animation: 'slide_from_bottom',
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#0f172a',
                    },
                }}
            />
        </ThemeProvider>
    );
}
