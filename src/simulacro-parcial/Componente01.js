import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Input, Text } from '@rneui/themed';

const Componente01 = ({ navigation }) => {
  // Estado para almacenar el texto ingresado
  const [texto, setTexto] = useState('');

  return (
    <ScrollView>
      {/* Texto: Pantalla Principal */}
      <Text h3 style={{ textAlign: 'center', marginVertical: 20 }}>
        Pantalla Principal
      </Text>

      {/* Campo de entrada para el texto */}
      <Input
        placeholder="Ingrese un texto"
        value={texto}
        onChangeText={setTexto} // Actualiza el estado con el texto ingresado
      />

      {/* ListItem que navega a Props02 y pasa el texto y estado */}
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('Props02', { nombre: texto, estado: false })}
      >
        <ListItem.Content>
          <ListItem.Title>Props02</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {/* Otros ListItem según sea necesario */}
      <ListItem bottomDivider onPress={() => navigation.navigate('Axios03')}>
        <ListItem.Content>
          <ListItem.Title>Axios03</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage04')}>
        <ListItem.Content>
          <ListItem.Title>AsyncStorage04</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default Componente01;