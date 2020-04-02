import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import Home from '../screens/home';
// import AddItems from '../screens/addItems';
import periodicTable from '../screens/PeriodicTable';
const HomeStack = createStackNavigator({
  // Home: {
  //   screen: Home,
  // },
  // AddItems: {
  //   screen: AddItems,
  // },
  periodicTable: {
    screen: periodicTable,
  },
});

export default createAppContainer(HomeStack);
