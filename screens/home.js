import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.push('ReviewDetails');
  };

  return (
    <View style={styles.mainViewStyle}>
      <Text>Home screen</Text>
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

export default Home;
