import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorage04 = () => {
  const [name, setName] = useState('');
  const [ci, setCI] = useState('');
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
      if (name.trim() === '' || ci.trim() === '') {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      if (isEditing) {
        actualizar();  // Llama a la función actualizar en lugar de hacer la lógica aquí
      } else {
        // Guardar
        const key = `item_${Date.now()}`;
        await AsyncStorage.setItem(key, JSON.stringify({ name, ci }));
        setName('');
        setCI('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar/actualizar los datos');
    }
  };

  const actualizar = async () => {
    try {
      await AsyncStorage.setItem(editKey, JSON.stringify({ name, ci }));
      setName('');
      setCI('');
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
    setName(parsedValue.name);
    setCI(parsedValue.ci);
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
      <Input
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Input
        placeholder="Cédula de Identidad"
        value={ci}
        onChangeText={setCI}
        style={styles.input}
      />
      <Button
        title={isEditing ? "Actualizar" : "Guardar"}
        onPress={guardar}
        buttonStyle={isEditing ? styles.updateButton : styles.saveButton}
      />
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      {dataList.map(({ id, value }) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{JSON.parse(value).name}</ListItem.Title>
            <ListItem.Subtitle>{JSON.parse(value).ci}</ListItem.Subtitle>
          </ListItem.Content>
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
    backgroundColor: 'green',
  },
  editButton: {
    backgroundColor: 'blue',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default AsyncStorage04;