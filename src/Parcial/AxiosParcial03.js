import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Axios from 'axios';
import { Card, Text } from '@rneui/themed';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);

  // Hacer la petición GET para obtener los usuarios desde la API
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);  // Guardar los datos obtenidos en el estado
      })
      .catch(error => console.error(error));  // Manejar errores
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {/* Mostrar los datos en un FlatList */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}  // Usar el id como key
        renderItem={({ item }) => (
          <Card>
            {/* Mostrar el atributo username en lugar de name */}
            <Card.Title>{item.username}</Card.Title>
            <Card.Divider />
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Website: {item.website}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default AxiosParcial03;
