import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Extraer los parámetros recibidos desde ComponenteParcial01
  const { materia, nota } = route.params;

  return (
    <View style={styles.container}>
      {/* Mostrar la materia y la nota */}
      <Text style={styles.text}>
        En la materia: {materia}, recibí la siguiente nota: {nota}
      </Text>
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
