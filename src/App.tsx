import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { StackNavigator } from './Presentation/Routes/StackNavigator';
import { DrawerNavigator } from './Presentation/Routes/DrawerNavigator';
import { BottomTabNavigator } from './Presentation/Routes/BottomTabsNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <DrawerNavigator/>
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
};
