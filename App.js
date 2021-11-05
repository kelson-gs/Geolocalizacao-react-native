import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Local from '@react-native-community/geolocation';

export default function App() {

  const[lat, setLatitude] = useState(0);
  const[lon, setLongetude] = useState(0);

  const obterLocal=()=>{
    
    Local.getCurrentPosition(
      (pos)=>{
        setLatitude(pos.coords.latitude);
        setLongetude(pos.coords.longitude);
      },
      (erro)=>{
          alert('Erro:' + erro.message)
      },
      {
        enableHighAccuracy: true,
        timeout: 120000,
        maximumAge: 1000

      }
    )
  }

  return (
    <View style={styles.container}>
      <Text>CFB cursos - Geolocalização</Text>
      <TouchableHighlight
        onPress={obterLocal}
      >
        <Text>Clique aqui para pegar a localização</Text>
      </TouchableHighlight>
      <Text>Latitude: {lat}</Text>
      <Text>Longetude: {lon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
