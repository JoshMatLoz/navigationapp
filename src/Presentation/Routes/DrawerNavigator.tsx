import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../Screens/Profile/ProfileScreen';
import { globalColors } from '../Theme/Theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../Components/Shared/IonIcon';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
    //Crear componente especializado para el drawer
      drawerContent={ (props) => <CustomDrawerContent {...props }/>}
    // Desaparecer el header y otras opciones
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width >= 750) ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.background,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen 
        options={{drawerIcon: ({ color }) => (<IonIcon name='color-wand' />)}} name="Tabs" 
        component={BottomTabNavigator} 
      />
      <Drawer.Screen 
        options={{drawerIcon: ({ color }) => (<IonIcon name='card' />)}}
        name="Profile" 
        component={ProfileScreen} 
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props } />
    </DrawerContentScrollView>
  )
}