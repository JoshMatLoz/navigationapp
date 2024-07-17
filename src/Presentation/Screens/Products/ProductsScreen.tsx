import React from 'react';
import {Text, View} from 'react-native';
import { globalStyles } from '../../Theme/Theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../Components/Shared/PrimaryButton';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../Routes/StackNavigator';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
  {id: 7, name: 'Producto 7'},
  {id: 8, name: 'Producto 8'},


]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style = {globalStyles.container}>
      <Text style={{marginBottom: 30, fontSize:20, fontWeight: 'bold'}}>PRODUCTOS</Text>

      <FlatList
        data={products}
        renderItem={ ({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})}
            label={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 30, fontSize:20, fontWeight: 'bold'}}>AJUSTES</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ajustes"
      />
    </View>
  );
};