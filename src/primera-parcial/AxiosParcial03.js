import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import Axios from 'axios';
import { Card, Text } from '@rneui/themed';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Buscar álbum"
        value={search}
        onChangeText={handleSearch}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
      />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.title}</Card.Title>
          </Card>
        )}
      />
    </View>
  );
};

export default AxiosParcial03;
