import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem, Input, Text } from '@rneui/themed';

const ComponenteParcial01 = ({ navigation }) => {
  // Estados para almacenar nombre y semestre
  const [nombre, setNombre] = useState('');
  const [semestre, setSemestre] = useState('');

  return (
    <ScrollView>
      {/* Título centrado */}
      <Text h3 style={{ textAlign: 'center', marginVertical: 20 }}>
        Examen primera parcial
      </Text>

      {/* Campo de entrada para el nombre */}
      <Input
        placeholder="Ingresar nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Campo de entrada para el semestre (solo números) */}
      <Input
        placeholder="Ingresar semestre"
        value={semestre}
        keyboardType="numeric"  // Solo permite ingresar números
        onChangeText={setSemestre}
      />

      {/* Lista de componentes para navegar */}
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate('PropsParcial02', { nombre, semestre })}
      >
        <ListItem.Content>
          <ListItem.Title>PropsParcial02</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
        <ListItem.Content>
          <ListItem.Title>AxiosParcial03</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
        <ListItem.Content>
          <ListItem.Title>AsyncStorageParcial04</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  );
};

export default ComponenteParcial01;
