import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { CheckBox, Input, Text } from '@rneui/themed';

const ComponenteParcial = () => {
  // Estado para almacenar el correo electrónico y el estado de los checkboxes
  const [correo, setCorreo] = useState('');
  const [checkedItems, setCheckedItems] = useState({
    propiedades: false,
    axios: false,
    asyncStorage: false,
  });

  // Función para manejar el cambio en los checkboxes
  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Texto: Examen Parcial de React Native */}
      <Text h3 style={styles.title}>
        Examen Parcial de React Native
      </Text>

      {/* Imagen que representa el ícono de la aplicación */}
      <Image
        source={{ uri: 'https://example.com/your-logo.png' }} // Reemplaza con la URL de tu imagen
        style={styles.image}
        resizeMode="contain"
      />

      {/* Campo de entrada para el correo electrónico */}
      <Input
        placeholder="Ingresar correo electrónico"
        value={correo}
        onChangeText={setCorreo} // Actualiza el estado con el correo ingresado
      />

      {/* Lista de checkboxes */}
      <Text h4 style={styles.checkboxTitle}>Temas a cubrir:</Text>
      <CheckBox
        title="Propiedades en React Native"
        checked={checkedItems.propiedades}
        onPress={() => handleCheckboxChange('propiedades')}
      />
      <CheckBox
        title="Consumo de API con Axios"
        checked={checkedItems.axios}
        onPress={() => handleCheckboxChange('axios')}
      />
      <CheckBox
        title="Gestión de datos con AsyncStorage"
        checked={checkedItems.asyncStorage}
        onPress={() => handleCheckboxChange('asyncStorage')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: 100, // Ajusta el tamaño según tu imagen
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  checkboxTitle: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ComponenteParcial;
