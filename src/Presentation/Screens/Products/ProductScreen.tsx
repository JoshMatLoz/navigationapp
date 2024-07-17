import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import { RootStackParams } from '../../Routes/StackNavigator';
import { globalStyles } from '../../Theme/Theme';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  }, [])
  
  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}
      >PRODUCT SCREEN</Text>
      <Text>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
