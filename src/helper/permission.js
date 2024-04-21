import { Alert, Linking, Platform } from "react-native";

export const showLocationPermissionAlert = () =>
  Alert.alert("Location Permission", "You don't give a location permission!", [
    {
      text: "Settings",
      onPress: () => {
        if (Platform.OS === "android") {
          Linking.sendIntent("android.settings.LOCATION_SOURCE_SETTINGS");
          return;
        }
        Linking.openSettings();
      },
      style: "default",
    },
    {
      text: "Cancel",
      style: "destructive",
    },
  ]);
