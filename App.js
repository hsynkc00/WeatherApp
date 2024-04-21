import { useFonts } from "expo-font";
import { Navigator } from "./src/navigation/Navigator";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito: require("./assets/fonts/Nunito-VariableFont_wght.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic-VariableFont_wght.ttf"),
    "Nunito-Regular": require("./assets/fonts/static/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/static/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/static/Nunito-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Navigator />;
}
