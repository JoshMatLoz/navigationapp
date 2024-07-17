import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../Screens/Profile/ProfileScreen';
import { AboutScreen } from '../Screens/About/AboutScreen';
import { HamburgerMenu } from '../Components/Shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu/>
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}