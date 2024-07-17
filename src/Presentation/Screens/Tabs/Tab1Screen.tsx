import {Text, View} from 'react-native';
import { HamburgerMenu } from '../../Components/Shared/HamburgerMenu';
import { IonIcon } from '../../Components/Shared/IonIcon';

export const Tab1Screen = () => {

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}>
  //         <Text>Menú</Text>
  //       </Pressable>
  //     )
  //   })
  // }, [])
  

  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1 Screen</Text>
      
    </View>
  );
};
