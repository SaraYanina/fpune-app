import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem } from '@rneui/themed';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [dataList, setDataList] = useState([]);

  // Cargar los datos almacenados al iniciar la pantalla
  useEffect(() => {
    listar();
  }, []);

  // Función para listar los datos guardados en AsyncStorage
  const listar = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([id, value]) => ({ id, value })));
    } catch (error) {
      console.error('Error al cargar los datos', error);
    }
  };

  // Función para guardar un nuevo dato
  const guardar = async () => {
    if (!codigo || !materia || !calificaciones) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    try {
      const key = `item_${Date.now()}`;
      await AsyncStorage.setItem(key, JSON.stringify({ codigo, materia, calificaciones }));
      Alert.alert('Éxito', 'Datos guardados');
      // Limpiar los inputs
      setCodigo('');
      setMateria('');
      setCalificaciones('');
      listar(); // Actualizar la lista de datos
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
    }
  };

  // Función para eliminar un dato
  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar(); // Actualizar la lista de datos después de eliminar
      Alert.alert('Éxito', 'Dato eliminado');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar');
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para código */}
      <Input
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />
      {/* Input para materia */}
      <Input
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
      />
      {/* Input para calificaciones */}
      <Input
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
      />
      {/* Botón para guardar */}
      <Button
        title="Guardar"
        onPress={guardar}
        buttonStyle={{ marginBottom: 10 }}
      />
      {/* Lista de datos almacenados */}
      <FlatList
        data={dataList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const { codigo, materia, calificaciones } = JSON.parse(item.value);
          return (
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{codigo} - {materia}</ListItem.Title>
                <ListItem.Subtitle>Calificaciones: {calificaciones}</ListItem.Subtitle>
              </ListItem.Content>
              <Button title="Eliminar" onPress={() => eliminar(item.id)} />
            </ListItem>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AsyncStorageParcial04;
