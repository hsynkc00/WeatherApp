import { Alert } from "react-native";

export const handleError = (error) => {
  if (error.response.status == 401) {
    Alert.alert(
      "Invalid API request!",
      "Please specify a valid key in your API request or check your subscription status."
    );
    return;
  }
  if (error.response.status == 429) {
    Alert.alert(
      "Exceeded API call limit!",
      "Please upgrade your plan or reduce the number of calls."
    );
    return;
  }
  if (error.response.status >= 500) {
    Alert.alert("Server Error!", "Please contact us");
  }
};
