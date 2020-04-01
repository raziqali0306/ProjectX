import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const ReviewDetails = ({navigation}) => {
  const pressHandler = () => {
    navigation.pop();
  };
  return (
    <View style={styles.mainViewStyle}>
      <Text>Review Details</Text>
      <Button title={'Return'} onPress={pressHandler} />
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

export default ReviewDetails;
