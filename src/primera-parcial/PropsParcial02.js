import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { nombre, semestre } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mi nombre es: {nombre}, actualmente estoy en el {semestre} semestre</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  }
});

export default PropsParcial02;
