import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const UseStateComponents = () => {
  // Declaramos una variable de estado llamada "count" con un valor inicial de 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Has presionado el botón {count} veces</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Aumenta el contador</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Reinicia el contador</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray', // Color de fondo para verificar el renderizado
    },
    button: {
      marginVertical: 20,
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
      color: 'black', // Asegúrate de que el color del texto sea visible
    },
  });
  

export default UseStateComponents;
