import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.mainViewStyle}>
      <Text>Home screen</Text>
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
