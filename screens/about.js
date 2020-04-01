import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const About = ({navigation}) => {
  const pressHandler = () => {
    navigation.pop();
  };

  return (
    <View style={styles.mainViewStyle}>
      <Text>About</Text>
      <Button title={'goto Review Details->'} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
