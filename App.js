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
  const [colors, setColors] = useState(['red', 'green', 'yellow']);
  const [num, setNum] = useState(0);
  return (
    <View style={styles.mainViewStyle}>
      <View style={{flex: 3, flexDirection: 'row'}}>
        <View style={{...styles.sub_4, backgroundColor: colors[0]}} />
        <View style={{...styles.sub_4, backgroundColor: colors[1]}} />
        <View style={{...styles.sub_4, backgroundColor: colors[2]}} />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          title={'rotate(' + num + ')'}
          onPress={() => {
            // num
            const temp = [...colors];
            var firstColor = temp.shift();
            temp.push(firstColor);
            setColors(temp);
            // num
            setNum(x => (x += 1));
          }}
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
    alignItems: 'center',
  },
});

export default App;
