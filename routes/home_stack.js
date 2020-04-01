import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import reviewDetails from '../screens/reviewDetails';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: reviewDetails,
  },
});

export default createAppContainer(HomeStack);
