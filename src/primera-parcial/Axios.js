import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import Axios from 'axios';
import { Card, Text } from '@rneui/themed';

const AxiosParcial = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  // Hacer la petición GET para obtener los comentarios desde la API
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setData(response.data); // Guardar los datos obtenidos en el estado
        setFilteredData(response.data); // Inicialmente, la lista filtrada es igual a la lista completa
      })
      .catch(error => console.error(error)); // Manejar errores
  }, []);

  // Función para filtrar la lista de comentarios por email
  const handleSearch = (text) => {
    setSearch(text);
    const filtered = data.filter(item => item.email.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Campo de búsqueda */}
      <TextInput
        placeholder="Buscar por email"
        value={search}
        onChangeText={handleSearch}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10
        }}
      />

      {/* Mostrar los datos filtrados en un FlatList */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()} // Usar el id como key
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.email}</Card.Title>
            <Card.Divider />
            <Text>Nombre: {item.name}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default AxiosParcial;
