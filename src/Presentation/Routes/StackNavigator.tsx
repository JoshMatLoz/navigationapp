/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import { SettingsScreen } from '../Screens/Settings/SettingsScreen';
import { HomeScreen } from '../Screens/Home/HomeScreen';
import { ProductsScreen } from '../Screens/Products/ProductsScreen';
import { ProductScreen } from '../Screens/Products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = {
  Home: undefined,
  Products: undefined,
  Product: {id: number, name:string},
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}