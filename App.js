import React from 'react';
import {Text, View, TextInput} from 'react-native';
import InicioSesion from './screens/InicioSesion';
import {PruebaRest} from './screens/PruebaRest';
import {Fiestas} from './screens/Fiestas'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const YourApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Iniciar sesión" component={InicioSesion}/>
                <Stack.Screen name="Prueba Rest" component={PruebaRest}/>
                <Stack.Screen name="Fiestas" component={Fiestas}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default YourApp;
