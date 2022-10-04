import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [userText, setUserText] = useState('');

  const speak = () => {
    Speech.speak(userText);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder='keyword' 
        onChangeText={text => setUserText(text)} />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    fontSize: 18, 
    width: 200
   },
});
