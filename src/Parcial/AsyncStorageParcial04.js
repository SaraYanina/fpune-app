import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [editKey, setEditKey] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([id, value]) => ({ id, value })));
    } catch (error) {
      console.error('Error al cargar los datos', error);
    }
  };

  const guardar = async () => {
    try {
      if (codigo.trim() === '' || carrera.trim() === '' || materia.trim() === '') {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      if (isEditing) {
        actualizar();  // Llama a la función actualizar si está en modo de edición
      } else {
        // Guardar nuevo dato
        const key = `item_${Date.now()}`;
        await AsyncStorage.setItem(key, JSON.stringify({ codigo, carrera, materia }));
        setCodigo('');
        setCarrera('');
        setMateria('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
    }
  };

  const actualizar = async () => {
    try {
      await AsyncStorage.setItem(editKey, JSON.stringify({ codigo, carrera, materia }));
      setCodigo('');
      setCarrera('');
      setMateria('');
      setEditKey('');
      setIsEditing(false);
      listar();
      Alert.alert('Éxito', 'Datos actualizados');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos');
      console.error(error);
    }
  };

  const editar = (id, value) => {
    const parsedValue = JSON.parse(value);
    setCodigo(parsedValue.codigo);
    setCarrera(parsedValue.carrera);
    setMateria(parsedValue.materia);
    setEditKey(id);
    setIsEditing(true);
  };

  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar();
      Alert.alert('Éxito', 'Datos eliminados');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar los datos');
    }
  };

  return (
    <View style={styles.container}>
      {/* Inputs para código, carrera y materia */}
      <Input
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <Input
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={styles.input}
      />
      <Input
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
      />
      
      {/* Botón para guardar o actualizar */}
      <Button
        title={isEditing ? "Actualizar" : "Guardar"}
        onPress={guardar}
        buttonStyle={isEditing ? styles.updateButton : styles.saveButton}
      />
      
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      
      {/* Listado de datos guardados */}
      {dataList.map(({ id, value }) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{JSON.parse(value).codigo}</ListItem.Title>
            <ListItem.Subtitle>{JSON.parse(value).carrera}</ListItem.Subtitle>
            <ListItem.Subtitle>{JSON.parse(value).materia}</ListItem.Subtitle>
          </ListItem.Content>
          
          {/* Botones para editar y eliminar */}
          <Button
            title="Editar"
            onPress={() => editar(id, value)}
            buttonStyle={styles.editButton}
          />
          <Button
            title="Eliminar"
            onPress={() => eliminar(id)}
            buttonStyle={styles.deleteButton}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: 'green',
  },
  updateButton: {
    backgroundColor: 'blue',
  },
  editButton: {
    backgroundColor: 'orange',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default AsyncStorageParcial04;
