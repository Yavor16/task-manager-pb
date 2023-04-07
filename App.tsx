import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/app/screens/SignInScreen';
import HomeScreen from './src/app/screens/HomeScreen';
import CreateTaskGroupScreen from './src/app/screens/CreateTaskGroupScreen';
import TasksScreen from './src/app/screens/TasksScreen';
import { NavigationNames } from './src/app/constants';

export type RootStackParamList = {
  SignInScreen: undefined;
  Home: { userId: string };
  CreateTaskGroup: { userId: string };
  TasksScreen: { groupId: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationNames.SIGNIN_SCREEN}>
        <Stack.Screen name={NavigationNames.SIGNIN_SCREEN} component={SignInScreen} />
        <Stack.Screen name={NavigationNames.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={NavigationNames.CREATE_TASK_GROUP_SCREEN} component={CreateTaskGroupScreen} />
        <Stack.Screen name={NavigationNames.TASKS_SCREEN} component={TasksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
