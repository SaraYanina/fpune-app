import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const TareasAsyncStorage = () => {
  const [id, setId] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('pendiente');
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
      if (id.trim() === '' || descripcion.trim() === '') {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      if (isEditing) {
        actualizar();
      } else {
        // Guardar nueva tarea
        const key = `task_${Date.now()}`;
        await AsyncStorage.setItem(key, JSON.stringify({ id, descripcion, estado }));
        setId('');
        setDescripcion('');
        setEstado('pendiente');
        listar();
        Alert.alert('Éxito', 'Tarea guardada');
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar la tarea');
    }
  };

  const actualizar = async () => {
    try {
      await AsyncStorage.setItem(editKey, JSON.stringify({ id, descripcion, estado }));
      setId('');
      setDescripcion('');
      setEstado('pendiente');
      setEditKey('');
      setIsEditing(false);
      listar();
      Alert.alert('Éxito', 'Tarea actualizada');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar la tarea');
      console.error(error);
    }
  };

  const editar = (id, value) => {
    const parsedValue = JSON.parse(value);
    setId(parsedValue.id);
    setDescripcion(parsedValue.descripcion);
    setEstado(parsedValue.estado);
    setEditKey(id);
    setIsEditing(true);
  };

  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar();
      Alert.alert('Éxito', 'Tarea eliminada');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar la tarea');
    }
  };

  const cambiarEstado = async (id, value) => {
    const parsedValue = JSON.parse(value);
    const nuevoEstado = parsedValue.estado === 'pendiente' ? 'completada' : 'pendiente';
    await AsyncStorage.setItem(id, JSON.stringify({ ...parsedValue, estado: nuevoEstado }));
    listar();
  };

  return (
    <View style={styles.container}>
      {/* Inputs para ID, Descripción y Estado */}
      <Input
        placeholder="ID de la tarea"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />
      <Input
        placeholder="Descripción de la tarea"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />
      
      {/* Botón para guardar o actualizar */}
      <Button
        title={isEditing ? "Actualizar" : "Guardar"}
        onPress={guardar}
        buttonStyle={isEditing ? styles.updateButton : styles.saveButton}
      />
      
      <Text h4 style={styles.title}>Lista de Tareas:</Text>
      
      {/* Listado de tareas guardadas */}
      {dataList.map(({ id, value }) => {
        const { id: taskId, descripcion, estado } = JSON.parse(value);
        return (
          <ListItem key={id} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>ID: {taskId}</ListItem.Title>
              <ListItem.Subtitle>Descripción: {descripcion}</ListItem.Subtitle>
              <ListItem.Subtitle>Estado: {estado}</ListItem.Subtitle>
            </ListItem.Content>
            
            {/* Botón para cambiar estado */}
            <Button
              title={estado === 'pendiente' ? "Marcar como completada" : "Marcar como pendiente"}
              onPress={() => cambiarEstado(id, value)}
              buttonStyle={styles.changeStatusButton}
            />
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
        );
      })}
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
  changeStatusButton: {
    backgroundColor: 'purple',
  },
  editButton: {
    backgroundColor: 'orange',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default TareasAsyncStorage;
