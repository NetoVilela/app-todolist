import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Title from "./src/components/Title/";
import Form from "./src/components/Form/";

// imports pages
import HomePage from './src/pages/Home/';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.contentHeader}>
        <Title />
      </View>
      <View style={styles.contentView}>
        <Form />
      </View> */}
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#222",
    alignItems: "center"
  },

  contentHeader: {
    flex: 1,
    width: "100%"
  },

  contentView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    flex: 7
  }
});
