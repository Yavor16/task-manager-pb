import React, { useState } from "react";
import {
  View,
  Text,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { styles } from "../styles/CreateTaskGroupScreenStyle";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import CreateTaskStageGroupScreen from "./CreateTaskStageGroupScreen";
import { createTextInput, createTouchableOpacityButton } from "../common";
import { createTaskGroup, createTaskGroupTaskStageGroup } from "../services/CreateTaskGroupService";
import { getAllStageGroupByUserId } from "../services/CreateTaskGroupService";
import { NavigationNames } from "../constants";

type CreateTaskGroupScreenProps = {
  navigation: NavigationProp<RootStackParamList, typeof NavigationNames.CREATE_TASK_GROUP_SCREEN>;
  route: RouteProp<RootStackParamList, typeof NavigationNames.CREATE_TASK_GROUP_SCREEN>;
};

const CreateTaskGroupScreen: React.FC<CreateTaskGroupScreenProps> = ({ navigation, route }) => {
  const { userId } = route.params;

  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [taskStageGroup, setTaskStageGroup] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<{ label: string, value: string}[]>([]);

  const handleTaskStageChange = (value: string | null) => {
    if (value === "addnew") {
      setIsVisible(true);
      setTaskStageGroup(null);
    }
  };

  const handleOnShowCreateStageGroup = () => {
    setIsVisible(!isVisible);
  }    

  const handleOnOpenDropDownMenu = async () => {
    setItems([]);

    getAllStageGroupByUserId(userId).then((stageGroups) => {
      if (stageGroups) {
        stageGroups.forEach(stageGroup => {
          setItems(prevItems => [...prevItems, { label: stageGroup["name"], value: stageGroup["id"] }]);
        });
      }
      setItems(prevItems => [...prevItems, { label: "New Task Stage Group", value: "addnew" }]);
    });
  };

  const handleCreateTaskGroup = async () => {
    if (taskStageGroup == null || name.length == 0 || description.length == 0) {
      return;
    }

    await createTaskGroup(name, description, userId).then(taskGroupId => {
      createTaskGroupTaskStageGroup(taskGroupId, taskStageGroup);
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Task Group</Text>
      {createTextInput(
        styles.input, 
        "Name", 
        name, 
        setName)}
      {createTextInput(
        styles.input, 
        "Description", 
        description, 
        setDescription)}
      <DropDownPicker
        open={open}
        value={taskStageGroup}
        items={items}
        onOpen={handleOnOpenDropDownMenu}
        setOpen={setOpen}
        setValue={setTaskStageGroup}
        onChangeValue={handleTaskStageChange}
      />
      {createTouchableOpacityButton(
        styles.createButton, 
        styles.createButtonText, 
        handleCreateTaskGroup,
        "Create")}
      <CreateTaskStageGroupScreen 
        userId={userId} 
        isVisible={isVisible} 
        toggleMenuVisibility={handleOnShowCreateStageGroup}/>
    </View>
  );
};

export default CreateTaskGroupScreen;
