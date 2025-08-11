import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Detials'>;

const Detials = ({ route, navigation }: DetailsProps) => {
  const { productId } = route.params;
  return (
    <View>
      <Text
        style={{
          padding: 30,
          fontSize: 30,
        }}
      >
        Product id is {productId}
      </Text>
    </View>
  );
};

export default Detials;
