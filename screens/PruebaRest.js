import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export const PruebaRest = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPachangueros = async () => {
        try {
            const response = await fetch('http://192.168.0.9:8082/pachanguero/');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPachangueros();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.idPachanguero} - {item.nombrePachanguero} - {item.apellidosPachanguero}</Text>
                    )}
                />
            )}
        </View>
    );
};
