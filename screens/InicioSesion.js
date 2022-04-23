import React from 'react';
import {Text, View, TextInput, ScrollView, StyleSheet, Button, Image, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const x = () => {
    Alert.alert("Alerta", "Tu rol es ")
}

const YourApp = ({navigation}) => {
    return (
        <ScrollView>
            <View style={[{
                margin: 30,
            }]}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../img/fiesta.png')} style={{width: 150, height: 150}}/>
                </View>
                <Text style={styles.text}>Correo electrónico</Text>
                <TextInput style={styles.inputText}/>
                <Text style={styles.text}>Contraseña</Text>
                <TextInput style={styles.inputText} secureTextEntry={true}/>
                <Button title={'Iniciar sesión'} color="#c269a3" onPress={() => navigation.navigate('Fiestas')}/>
                {/*<Text>Try editing me! 🎉</Text>*/}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        marginBottom: 10,
        //margin: 20,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 18,
        marginBottom: 10,
        //marginLeft: 20,
        //marginRight: 20
    },
});

export default YourApp;
