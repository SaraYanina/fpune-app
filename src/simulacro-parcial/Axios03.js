import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Axios from 'axios';
import { Card, Text } from '@rneui/themed';

const Axios03 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.name}</Card.Title>
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

export default Axios03;
