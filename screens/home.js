import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, AsyncStorage} from 'react-native';

const Home = props => {
  const [num, setNum] = useState(0);

  const getCountFromStorage = async () => {
    const countString = await AsyncStorage.getItem('clickCount');
    console.log('------- got count string as ', countString);
    setNum(Number(countString));
  };
  useEffect(() => {
    getCountFromStorage();
  }, []);

  const tapHandler = async () => {
    setNum(numOne => {
      const x = numOne + 1;
      AsyncStorage.setItem('clickCount', `${x}`);
      return x;
    });
  };

  return (
    <View style={styles.mainViewStyle}>
      <Text>Home screen</Text>
      {/* <Button title={'goto Review Details->'} onPress={gotoReviewDetails} /> */}
      <Text>num = {num}</Text>
      <Button title={'TAP'} onPress={tapHandler} />
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
