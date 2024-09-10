import React, { useState } from 'react';
import { Text, TextInput, Button, FlatList, StyleSheet, ScrollView, View, Image, Alert } from 'react-native';

const ListalumnosComponents = () => {
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [nombres, setNombres] = useState([]);
    // const [semestre, setSemestre] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const addNombre = () => {
        if (!validateEmail(email)) {
            Alert.alert('Error', 'Por favor ingrese un correo válido');
            return;
        }

        setNombres([...nombres, { key: Date.now().toString(), cedula: cedula, value: nombre, email: email }]);
        setCedula('');
        setNombre('');
        setEmail('');
        // setSemestre('');
    };

    const deleteNombre = () => {
        setNombres([]);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/politecnica.jpg')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.headerText}>LISTA DE ALUMNOS DEL 8VO SEMESTRE</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese Número de Cédula..."
                    value={cedula}
                    keyboardType='numeric'
                    onChangeText={setCedula}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese Nombre y Apellido..."
                    value={nombre}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingrese Email..."
                    value={email}
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
                <Button title="Agregar" onPress={addNombre} color="green" />
            </View>
            <Text style={styles.title}>Lista de Nombres:</Text>
            <View style={styles.listContainer}>
                <FlatList
                    style={styles.list}
                    data={nombres}
                    renderItem={({ item }) => (
                        <Text style={styles.nombre}>{item.cedula + ' - ' + item.value + ' - ' + item.email}</Text>
                    )}
                    keyExtractor={item => item.key}
                />
                <Button title="Eliminar" onPress={deleteNombre} color="red" disabled={nombres.length === 0} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'cover',
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
    },
    formContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    nombre: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listContainer: {
        marginBottom: 20,
    },
    list: {
        marginVertical: 10,
    },
});

export default ListalumnosComponents;
