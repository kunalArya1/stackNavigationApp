import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
type DetialsProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const Profile = ({ route, navigation }: DetialsProps) => {
  const { name } = route.params;
  return (
    <View>
      <Text
        style={{
          padding: 30,
          fontSize: 30,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Profile;
