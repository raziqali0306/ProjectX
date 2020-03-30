/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

const App: () => React$Node = () => {
  const [names, setnames] = useState(['Name-1', 'Name-2', 'Name-3', 'Name-4']);
  const [count, setcount] = useState(0);
  const onButtonPress = () => {
    const temp = [...names];
    const firstName = temp.shift();
    temp.push(firstName);
    setnames(temp);
    setcount(setCount => (setCount += 1));
  };
  return (
    <View style={styles.mainViewStyle}>
      <View style={{flex: 3, flexDirection: 'column'}}>
        <View style={{...styles.sub}}>
          <Text>{names[0]}</Text>
        </View>
        <View style={{...styles.sub}}>
          <Text>{names[1]}</Text>
        </View>
        <View style={{...styles.sub}}>
          <Text>{names[2]}</Text>
        </View>
        <View style={{...styles.sub}}>
          <Text>{names[3]}</Text>
        </View>
      </View>

      <View style={styles.sub_4}>
        <Button
          title={'refresh(' + count + ')'}
          onPress={onButtonPress}
          type="clear"
          size={2}
        />
      </View>
    </View>
  );
};
// rbgw
// white - btn
const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  sub: {
    flex: 1,
  },
  sub_4: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default App;
