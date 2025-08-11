import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Detials: { productId: number };
  Profile: { name: string };
};

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detials from './screens/Detials';
import Profile from './screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <NavigationContainer>
        {/* <stack.Navigator initialRouteName="Home">
          <stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: { backgroundColor: '#007AFF' },
              headerTintColor: '#fff',
              headerRight: () => (
                <Button title="Info" onPress={() => Alert.alert('info')} />
              ),
            }}
          />
          <stack.Screen
            name="Detials"
            component={Detials}
            options={{
              title: 'Item Details',
              headerStyle: { backgroundColor: '#007AFF' },
              headerTintColor: '#fff',
              headerRight: () => (
                <Button title="Info" onPress={() => Alert.alert('info')} />
              ),
            }}
          />
          <stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
            // options={{
            //   title: 'Item Details',
            //   headerStyle: { backgroundColor: '#007AFF' },
            //   headerTintColor: '#fff',
            //   headerRight: () => (
            //     <Button title="Info" onPress={() => Alert.alert('info')} />
            //   ),
            // }}
          />
        </stack.Navigator> */}

        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            // tabBarIcon: ({ color, size, focused }) => {
            //   let name =
            //     route.name === 'Home'
            //       ? 'home'
            //       : route.name === 'Detials'
            //       ? 'search'
            //       : 'person';
            //   return <></>;
            // },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true, // hide when keyboard opens
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{ tabBarLabel: 'Home' }}
          />
          <Tab.Screen
            name="Detials"
            component={Detials}
            options={{ tabBarLabel: 'Details' }}
          />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
