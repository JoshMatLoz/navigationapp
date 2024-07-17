import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../Theme/Theme';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../Components/Shared/PrimaryButton';
import { type RootStackParams } from '../../Routes/StackNavigator';
import { useEffect } from 'react';


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        // Para poner el drawer en un boton
        <Pressable
          onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>MENU</Text>
        </Pressable>
      )
    })
  }, [])
  

  return (
    <View style={globalStyles.container}>
      {/* <Pressable 
        style={globalStyles.primaryButton}
        onPress={ () => navigation.navigate( 'Products' as never) }
      >
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <PrimaryButton 
        onPress={ () => navigation.navigate('Products')}
        label = "Productos"
      />

      <PrimaryButton 
        onPress={ () => navigation.navigate('Settings')}
        label = "Opciones"
      />
    </View>
  );
};
