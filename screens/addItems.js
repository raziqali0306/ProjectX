import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const AddItems = ({navigation}) => {
  const [text, setText] = useState('');
  const onTodoAdded = navigation.getParam('callBack', () => {});
  const pressHandler = () => {
    onTodoAdded(text);
    navigation.pop();
  };
  return (
    <View style={styles.mainViewStyle}>
      <TextInput
        multiline
        style={styles.textBox}
        placeholder="Add a note.!!!"
        onChangeText={value => {
          setText(value);
        }}
      />
      <Button title={'ADD :)'} style={styles.button} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    margin: 10,
    padding: 16,
    width: 200,
    borderColor: 'blue',
    borderWidth: 2,
  },
  button: {
    padding: 50,
  },
});

export default AddItems;
