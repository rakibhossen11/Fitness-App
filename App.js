import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNames from './src/constants/navigation';
import Home from './src/screens/Home';
import ExerciseList from './src/screens/ExerciseList';
import Setting from './src/screens/Setting';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import colors from './src/constants/colors';
import Splash from './src/screens/Splash';
import Usercontainer from './src/screens/Usercontainer';
import Routinelist from './src/screens/Routinelist';
import Exercise from './src/screens/Exercise';
import CompleteExersice from './src/screens/CompleteExersice';
import RoutinePlaylist from './src/screens/RoutinePlaylist';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const iconSize = 30;

export default function App() {
  return (
    <>
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
    </>
  );
}

const HomeStack = () =>{
  <Stack.Navigator>
    <Stack.Screen name={ScreenNames.SPLASH_SCREEN} component={Splash}/>
    <Stack.Screen name={ScreenNames.USER_CONTAINER} component={Usercontainer} />
    <Stack.Screen name={ScreenNames.HOME} />
    <Stack.Screen name={ScreenNames.ROUTINE} component={Routinelist}/>
    <Stack.Screen name={ScreenNames.EXERCISE} component={Exercise} />
    <Stack.Screen name={ScreenNames.EXERCISE_COMPLETED} component={CompleteExersice} />
    <Stack.Screen name={ScreenNames.ROUTINEPLAYLIST} component={RoutinePlaylist} />
  </Stack.Navigator>
}

const TabNav = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.HOME} component={Home} options={{
        tabBarLabel: '',
        tabBarIcon: (tabInfo) =>{
          return(
            <Icon name='home-filled' size={iconSize} color={tabInfo.focused ? colors.app_Tint : colors.app_color_secondary} />
          )
        }
      }} />
      <Tab.Screen name={ScreenNames.LIST_EXERCISE} component={ExerciseList} options={{
        tabBarLabel: '',
        tabBarIcon: (tabInfo) =>{
          return(
            <Icon name='format-list-bulleted' size={iconSize} color={tabInfo.focused ? colors.app_Tint : colors.app_color_secondary} />
          )
        }
      }} />
      <Tab.Screen name={ScreenNames.SETTINGS} component={Setting} options={{
        tabBarLabel: '',
        tabBarIcon: (tabInfo) =>{
          return(
            <Icon name='settings' size={iconSize} color={tabInfo.focused ? colors.app_Tint : colors.app_color_secondary} />
          )
        }
      }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
