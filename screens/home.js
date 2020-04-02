import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button, CheckBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('AddItems', {
      callBack: text => {
        setTodos(currentTodos => [
          ...currentTodos,
          {title: text, completed: false},
        ]);
      },
    });
  };
  const [Todos, setTodos] = useState([]);

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo</Text>
      </View>

      <View style={styles.list}>
        {Todos.map((item, index) => {
          console.log(item);
          return (
            <View key={index} style={styles.itemStyle}>
              <CheckBox value={item.completed} />
              <Text>{item.title}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.footer}>
        <Button
          title={'ADD ITEM ->'}
          style={styles.footer}
          onPress={pressHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  header: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  list: {
    flex: 8,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingRight: 35,
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Home;
