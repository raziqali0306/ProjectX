import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, FlatList} from 'react-native';

const periodicTable = ({navigation}) => {
  const [elements, setElements] = useState([]);

  const fetchElements = async () => {
    fetch('https://neelpatel05.pythonanywhere.com/')
      .then(response => {
        return response.json();
      })
      .then(response => {
        response.map(item => {
          setElements(pres => [...pres, item]);
        });
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        console.log('error');
      });
  };

  useEffect(() => {
    fetchElements();
  }, []);
  return (
    <View style={styles.mainViewStyle}>
      <FlatList
        data={elements}
        renderItem={({item}) => {
          return (
            <View style={styles.listElement}>
              <Text>{item.name}</Text>
              <Text>{item.atomicNumber}</Text>
            </View>
          );
        }}
        keyExtractor={item => {
          return item.element;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },
  listElement: {
    // flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
});

export default periodicTable;
