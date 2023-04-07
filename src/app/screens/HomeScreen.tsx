import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { styles } from "../styles/HomeScreenStyle";
import { TaskGroupDTO } from "../model/TaskGroupDTO";
import { createTouchableOpacityButton } from "../common";
import { loadGroups } from "../services/HomeScreenService";
import { NavigationNames } from "../constants";

type HomeScreenProps = {
  navigation: NavigationProp<RootStackParamList, typeof NavigationNames.HOME_SCREEN>;
  route: RouteProp<RootStackParamList, typeof NavigationNames.HOME_SCREEN>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, route }) => {
  const { userId } = route.params;
  const [taskGroups, setTaskGroups] = useState<{ id: string; taskGroup: TaskGroupDTO }[]>();

  const handleCreateTaskPress = () => {
    navigation.navigate(NavigationNames.CREATE_TASK_GROUP_SCREEN, { userId: userId });
  };

  const a = () => {
    navigation.navigate(NavigationNames.TASKS_SCREEN, { groupId: "userId" });
  };

  useEffect(() => {
    loadGroups(userId).then(taskGroups => setTaskGroups(taskGroups));
  }, []);

  const scrollViewItem = (taskGroupObj: any) => {
    return (
      <View
        key={taskGroupObj["id"]}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
        style={styles.createButton}
        onPress={a}>
        <Text style={{ fontSize: 30 }}>
          {taskGroupObj["taskGroup"]["name"]}
        </Text>
      </TouchableOpacity>
      </View>
    );
  };

  const renderScrollViewItems = () => {
    const renderedItems = [];
    if (taskGroups) {
      for (let i = 0; i < taskGroups.length; i++) {
        renderedItems.push(scrollViewItem(taskGroups[i]));
      }
    }
    return renderedItems;
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderScrollViewItems()}</ScrollView>
      <Text style={styles.title}>Tasky</Text>
      {createTouchableOpacityButton(
        styles.createButton, 
        styles.buttonText, 
        handleCreateTaskPress, 
        "Create")}
    </View>
  );
};

export default HomeScreen;
