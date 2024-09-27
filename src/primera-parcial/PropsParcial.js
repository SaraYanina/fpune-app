import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial = ({ route }) => {
  // Extraer los parámetros recibidos desde ComponenteParcial.js
  const { correo } = route.params;
  const estado = true; // Estado estático como se indica en el ejercicio

  return (
    <View style={styles.container}>
      {/* Mostrar el correo y el estado */}
      <Text style={styles.text}>
        Mi correo es: {correo}, actualmente estoy {estado ? 'ACTIVO' : 'INACTIVO'} en el 8 semestre
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default PropsParcial;
