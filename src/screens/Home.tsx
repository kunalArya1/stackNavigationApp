import { View, Text, Button } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <>
      <View>
        <Text
          style={{
            padding: 30,
            fontSize: 30,
          }}
        >
          Home
        </Text>
        <View
          style={{
            width: '60%',
            padding: 30,
          }}
        >
          <Button
            title="go to detial page"
            onPress={() => navigation.navigate('Detials', { productId: 40 })}
          />
        </View>
        <View
          style={{
            width: '60%',
            padding: 30,
          }}
        >
          <Button
            title="go to Profile page"
            onPress={() =>
              navigation.navigate('Profile', { name: 'Kunal Kumar Arya' })
            }
          />
        </View>
      </View>
    </>
  );
};

export default Home;
