import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.border} />
    </View>
  );
}


const styles = StyleSheet.create({
  boxTitle:{
      alignItems: 'center',
  },

  title: {
    color: "#FFFFFF",
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center',
  },

  border:{
    borderBottomWidth: 3,
    borderBottomColor: "#FFFFFF",
    width: '80%',
  }

});
