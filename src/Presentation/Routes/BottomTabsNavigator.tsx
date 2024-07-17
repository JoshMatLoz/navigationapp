import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../Screens/Tabs/Tab1Screen';
import { globalColors } from '../Theme/Theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../Components/Shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = ( ) => {
  return (
    <Tab.Navigator
    //Opciones propias del tab navigator
      sceneContainerStyle = {{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle:{
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
    >
      <Tab.Screen name="Tab1" options = {{title:'Tab1', tabBarIcon: ({color}) => (<IonIcon name="paper-plane" color={color}/>)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options = {{title:'Tab2', tabBarIcon: ({color}) => (<IonIcon name="male" color={color}/>)}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options = {{title:'Tab3', tabBarIcon: ({color}) => (<IonIcon name="key" color={color}/>)}} component={StackNavigator} />
    </Tab.Navigator>
  );
}