import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export const Fiestas = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getFiestas = async () => {
        try {
            const response = await fetch('http://192.168.0.9:8082/pachanga/');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFiestas();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.nombre} - {item.fecha} - {item.hora} - {item.lugar}</Text>
                    )}
                />
            )}
        </View>
    );
};
