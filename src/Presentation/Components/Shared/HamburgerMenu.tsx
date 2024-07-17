import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}
          style={{
            marginLeft: 10
          }}
        >
          <Icon name="menu" size={20}></Icon>
        </Pressable>
      )
    })
  }, [])

  return (<></>)
}
