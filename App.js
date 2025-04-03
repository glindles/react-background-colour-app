import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react'


export default function App() {

  const [bgColour, setBgColour] = useState('#fff'); // State for background colour

  function getRandomColour() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
  }

  function changeBackgroundColour() {
    let colour = getRandomColour();
    setBgColour(colour);
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text>Press the button for a surprise!</Text>
      <Button title='Press Me' onPress={changeBackgroundColour}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
