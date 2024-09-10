import React, { useState } from 'react'; 
// Importa React y el hook useState para manejar estados en el componente.
import { Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native'; 
// Importa los componentes de React Native para construir la interfaz de usuario.

const ListmateriaComponents = () => {
  const [materia, setMateria] = useState(''); 
  // Estado para almacenar la materia ingresada.
  const [materias, setMaterias] = useState([]); 
  // Estado para almacenar la lista de materias y notas.
  const [nota, setNota] = useState(''); 
  // Estado para almacenar la nota ingresada.

  const addMateria = () => {
    if (materia && nota) {
      setMaterias([...materias, { key: Date.now().toString(), value: materia, calificacion: nota }]);
      // Añade la nueva materia y nota a la lista, generando una clave única basada en la fecha actual.
      setMateria(''); 
      // Limpia el campo de materia.
      setNota(''); 
      // Limpia el campo de nota.
    }
  };

  const deleteMateria = () => {
    setMaterias([]); 
    // Vacía la lista de materias y notas.
  };

  return (
    <ScrollView style={styles.container}>
      {/* Contenedor con desplazamiento vertical para acomodar varios elementos. */}
      
      <TextInput
        style={styles.input}
        placeholder="Cargar la materia..."
        value={materia}
        onChangeText={setMateria}
        // Campo de texto para ingresar la materia.
      />
      
      <TextInput
        style={styles.input}
        placeholder="Cargar la nota..."
        value={nota}
        keyboardType='numeric'
        onChangeText={setNota}
        // Campo de texto para ingresar la nota, con teclado numérico.
      />
      
      <Button title="Agregar" onPress={addMateria} />
      {/* Botón para agregar la materia y nota a la lista. */}
      
      <Text style={styles.title}>Lista de Materias:</Text>
      {/* Título que indica la lista de materias. */}
      
      <FlatList
        style={styles.list}
        data={materias}
        renderItem={({ item }) => (
          <Text style={styles.materia}>{item.value + ' - ' + item.calificacion}</Text>
          // Muestra cada materia y su nota en la lista.
        )}
        keyExtractor={item => item.key}
        // Extrae la clave única para cada ítem en la lista.
      />
      
      <Button title="Eliminar" onPress={deleteMateria} color="red" disabled={materias.length === 0} />
      {/* Botón para eliminar todas las materias, se desactiva si la lista está vacía. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Estilos personalizados para los componentes.

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    // Estilo para el contenedor principal: flexibilidad, espaciado y fondo blanco.
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    // Estilo para los campos de entrada de texto: borde, relleno y margen inferior.
  },

  materia: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // Estilo para cada ítem de la lista: relleno, color de fondo y borde inferior.
  },

  title: {
    marginVertical: 10,
    fontWeight: 'bold',
    // Estilo para el título de la lista: margen vertical y negrita.
  },

  list: {
    marginVertical: 20,
    // Estilo para la lista de materias: margen vertical.
  },
});

export default ListmateriaComponents;
// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
