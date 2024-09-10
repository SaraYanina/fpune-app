// Props02.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Props02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Estado: {estado ? 'Activo' : 'Inactivo'}</Text>
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

export default Props02;