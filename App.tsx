import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,

  
}from 'react-native';
//import BasicComponents from "./src/components/BasicComponents";
//import TextInANest from "./src/components/TextComponents";
//import TextInputExample from "./src/components/TextInputComponents";
//import DisplayAnImage from "./src/components/ImageComponents";
//import FlatListExample from "./src/components/FlatListComponents";
//import Prensable from "./src/components/PressableComponents";
//import UseStateComponents from "./src/components/UseState";
//import ListmateriaComponents from "./src/components/Calificaciones";
//import ListalumnosComponents from "./src/components/ListaAlumnos";
import Home from "./src/react-native-elements/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvatarBasic from "./src/react-native-elements/AvatarBasic";
import BadgeComponent from "./src/react-native-elements/Badge";
import Card from "./src/react-native-elements/Card";
import CardComponent from "./src/react-native-elements/Card";
import TabComponent from "./src/react-native-elements/Tab";
import PropsEjemplo from "./src/navegacion/PropsEjemplo";
import AxiosEjemplo from "./src/navegacion/AxiosEjemplo";
import AsyncStorageEjemplo from "./src/navegacion/AsyncStorageEjemplo";

import Componente01 from "./src/simulacro-parcial/Componente01";
import Axios03 from "./src/simulacro-parcial/Axios03";
import Props02 from "./src/simulacro-parcial/Props02";
import AsyncStorage04 from "./src/simulacro-parcial/AsyncStorage04";

import ComponenteParcial01 from "./src/primera-parcial/ComponenteParcial01";
import PropsParcial02 from "./src/primera-parcial/PropsParcial02";
import AxiosParcial03 from "./src/primera-parcial/AxiosParcial03";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorageParcial04 from "./src/primera-parcial/AsyncStorageParcial04";


const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <SafeAreaView style={styles.safeArea}>
      
       {/*<BasicComponents></BasicComponents>
     <TextInANest></TextInANest>
     <TextInputExample></TextInputExample>
     <DisplayAnImage></DisplayAnImage>
     <FlatListExample></FlatListExample>
     <Prensable></Prensable>
     <UseStateComponents></UseStateComponents>
     <ListmateriaComponents></ListmateriaComponents>
     <ListalumnosComponents></ListalumnosComponents>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Notas" component={Home}></Stack.Screen>
         <Stack.Screen name="Avatar"  component={AvatarBasic}></Stack.Screen>
         <Stack.Screen name="Badge"  component={BadgeComponent}></Stack.Screen>
         <Stack.Screen name="Card" component={CardComponent}></Stack.Screen>
         <Stack.Screen name="Tab" component={TabComponent}></Stack.Screen>
         <Stack.Screen name = "Props" component={PropsEjemplo}></Stack.Screen>
         <Stack.Screen name= "Axios" component={AxiosEjemplo}></Stack.Screen>
         <Stack.Screen name= "Async" component={AsyncStorageEjemplo}></Stack.Screen>

          <Stack.Screen name="Props02" component={Props02} />
          <Stack.Screen name="Axios03" component={Axios03} />
          <Stack.Screen name="AsyncStorage04" component={AsyncStorage04} />
     */}
     <NavigationContainer>
       <Stack.Navigator initialRouteName="ComponenteParcial01">
       <Stack.Screen name="ComponenteParcial01" component={ComponenteParcial01} />
       <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
       <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
       <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />


       </Stack.Navigator>
     </NavigationContainer>
     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Asegúrate de que el fondo sea visible
  },
});


export default App;