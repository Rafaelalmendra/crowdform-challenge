import { Text, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

// routes
import { Routes } from "routes";

// fonts
import {
  useFonts,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
} from "@expo-google-fonts/sora";

// styles
import theme from "styles/theme";
import { GlobalWrapper } from "styles";

export default function App() {
  const [isLoaded] = useFonts({
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
  });

  return (
    <>
      {!isLoaded ? (
        <Text>Loading...</Text>
      ) : (
        <ThemeProvider theme={theme}>
          <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="transparent"
          />

          <GlobalWrapper>
            <Routes />
          </GlobalWrapper>
        </ThemeProvider>
      )}
    </>
  );
}
