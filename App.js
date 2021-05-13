import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import CarList from './component/carlist';
import Header from './component/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />

      <StatusBar style="auto" />
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
  carContainer: {
    width: "100%",
    height: "100%"
  },
  header: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 17,
    color: "#5c5e62"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  }
});
