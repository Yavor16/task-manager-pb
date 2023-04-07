import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ColorPicker from "react-native-wheel-color-picker";
import { styles } from "../styles/CreateTaskStageStyle";
import { createTextInput, createTouchableOpacityButton } from "../common";
import { createTaskStage, createTaskStageGroup } from "../services/CreateTaskStageGroupService";

type CreateTaskGroupScreenProps = {
  userId: string;
  isVisible: boolean;
  toggleMenuVisibility: any;
};

const CreateTaskStageGroupScreen: React.FC<CreateTaskGroupScreenProps> = ({
  userId,
  isVisible,
  toggleMenuVisibility,}) => {
  const [taskStageGroupName, setTaskStageGroupName] = useState("");
  const [taskStageName, setTaskStageName] = useState("");
  const [taskStages, setTaskStages] = useState<{ id: number; taskStageName: string; taskStageColor: string }[]>([]);
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (newColor: any) => {
    setColor(newColor);
  };

  const handleAddTaskStage = () => {
    setTaskStages([
      ...taskStages,
      {
        id: taskStages.length + 1,
        taskStageName: taskStageName,
        taskStageColor: color,
      },
    ]);
  };

  const handleOnCancel = () => {
    clearModal();
    toggleMenuVisibility();
  };

  const clearModal = () => {
    setTaskStageGroupName("");
    setTaskStageName("");
    setColor("#FFFFFF");
  };

  const createNewTaskStageView = (
    index: number,
    text: string,
    textColor: string) => {
    return (
      <View key={index}>
        <Text style={{ color: textColor }}>{text}</Text>
      </View>
    );
  };

  const renderScrollViewItems = () => {
    const renderedItems = [];

    for (let i = 0; i < taskStages.length; i++) {
      renderedItems.push(
        createNewTaskStageView(
          taskStages[i]["id"],
          taskStages[i]["taskStageName"],
          taskStages[i]["taskStageColor"]
        )
      );
    }

    return renderedItems;
  };

  const handleSaveTaskStageGroup = async () => {
    await createTaskStageGroup(taskStageGroupName, userId).then(taskStageGroupId => {
      for (let i = 0; i < taskStages.length; i++) {
        const currentTaskStage = taskStages[i];
        createTaskStage(
          currentTaskStage["taskStageName"], 
          currentTaskStage["taskStageColor"], 
          taskStageGroupId);
      }

      clearModal();
      toggleMenuVisibility();
    })
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>New Task Stage Group</Text>
        {createTextInput(styles.input, "Enter name", taskStageGroupName, setTaskStageGroupName)}
        <Text style={styles.title}>New Task Stage Name</Text>
        {createTextInput(styles.input, "Enter name", taskStageName, setTaskStageName)}
        <ColorPicker
          onColorChange={handleColorChange}
          color={color}
          sliderSize={0}
          swatches={false}
          sliderHidden={true}
          gapSize={16}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTaskStage}>
          <Text style={styles.addButtonText}>+ Add Task Stage</Text>
        </TouchableOpacity>
        <ScrollView>{renderScrollViewItems()}</ScrollView>
        {createTouchableOpacityButton(
          styles.saveButton, 
          styles.saveButtonText, 
          handleSaveTaskStageGroup,
          "Save Task Stage Group")}
      </View>
      <Button title="Cancel" onPress={handleOnCancel} />
    </Modal>
  );
};

export default CreateTaskStageGroupScreen;
