import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import { globalStyles } from '../../Theme/Theme';
import { PrimaryButton } from '../../Components/Shared/PrimaryButton';

export const SettingsScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>
      {/* Regresar al anterior */}
      <PrimaryButton
        label='Anterior'
        onPress={() => navigator.goBack()}
      />
      {/* Regresar al incio */}
      <PrimaryButton
        label='Inicio'
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />      
    </View>
  );
};
