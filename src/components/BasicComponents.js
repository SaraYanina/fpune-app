import React from 'react'; // Importa la biblioteca React.
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'; 
// Importa componentes de React Native para construir la interfaz de usuario.

const BasicComponents = () => {
  
  return (
    <ScrollView style={styles.scrollView}>
      {/* Contenedor con capacidad de desplazamiento vertical. */}
      
      <Text>Ingresando varios componentes aquí...</Text>
      {/* Texto simple para mostrar un mensaje. */}
      
      <Text>{'\n'}{'\n'}</Text>
      {/* Agrega espacios verticales con saltos de línea. */}
      
      <View>
        <Text style={styles.text}>¡Hola mundo!</Text>
        {/* Muestra el texto "¡Hola mundo!" centrado y con estilo. */}
      </View>
      
      <View>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          onChangeText={(text) => console.log(text)}
          // Campo de texto para entrada, que registra lo ingresado en la consola.
        />
      </View>
      
      <View>
        <Pressable onPress={() => Alert.alert('Botón presionado')}>
          <Text>Botón de ejemplo</Text>
          {/* Botón táctil que muestra una alerta al presionarlo. */}
        </Pressable>
      </View>
      
      <View>
        <Image
          source={require('../assets/politecnica.jpg')}
          style={styles.image}
          // Muestra una imagen local con estilo definido.
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Estilos personalizados para los componentes.
  
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    // Estilo para el texto: tamaño, negrita, centrado y margen superior.
  },
  
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    // Estilo para el campo de entrada de texto: altura, borde y espaciado.
  },
  
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    // Estilo para la imagen: tamaño, modo de redimensionamiento y margen inferior.
  },
  
  scrollView: {
    marginHorizontal: 20,
    // Margen horizontal para el contenedor ScrollView.
  },
});

export default BasicComponents;
// Exporta el componente para su uso en otras partes de la aplicación.
