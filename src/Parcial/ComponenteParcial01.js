import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Input, Text } from '@rneui/themed';

const ComponenteParcial01 = ({ navigation }) => {
  // Estado para almacenar el texto ingresado
  const [nombre, setNombre] = useState('');
  const [nota, setNota] = useState('');

  return (
    <ScrollView>
      {/* Texto: Examen primera parcial */}
      <Text h3 style={{ textAlign: 'center', marginVertical: 20 }}>
        Examen primera parcial
      </Text>

      {/* Campo de entrada para el nombre completo */}
      <Input
        placeholder="Ingresar nombre completo"
        value={nombre}
        onChangeText={setNombre} // Actualiza el estado con el nombre ingresado
      />

      {/* Campo de entrada para la nota (solo números) */}
      <Input
        placeholder="Ingresar nota"
        value={nota}
        keyboardType="numeric" // Define el tipo de teclado como numérico
        onChangeText={setNota} // Actualiza el estado con la nota ingresada
      />

      {/* ListItem que navega a PropsParcial02 y pasa los datos */}
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('PropsParcial02', { materia: nombre, nota })}
      >
        <ListItem.Content>
          <ListItem.Title>PropsParcial02</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {/* ListItem que navega a AxiosParcial03 */}
      <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
        <ListItem.Content>
          <ListItem.Title>AxiosParcial03</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {/* ListItem que navega a AsyncStorageParcial04 */}
      <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
        <ListItem.Content>
          <ListItem.Title>AsyncStorageParcial04</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default ComponenteParcial01;
