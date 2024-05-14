import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CustomizeButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress} // Pass onPress function to TouchableOpacity
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 144, 1, 1)', // Yellow color
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomizeButton;
