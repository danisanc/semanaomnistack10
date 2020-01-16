import React from "react";
import { WebView } from "react-native-webview";

const Profile = ({ navigation }) => {
  const github_username = navigation.getParam("github_username");

  return <WebView source={{ uri: `https://github.com/${github_username}` }} />;
};

export default Profile;
