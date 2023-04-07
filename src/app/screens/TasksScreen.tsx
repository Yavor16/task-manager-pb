import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import React, { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { NavigationNames } from "../constants";

type TasksScreenProps = {
  navigation: NavigationProp<RootStackParamList, typeof NavigationNames.TASKS_SCREEN>;
  route: RouteProp<RootStackParamList, typeof NavigationNames.TASKS_SCREEN>;
};

const TasksScreen: React.FC<TasksScreenProps> = ({ navigation, route }) => {
  const groupId = route.params.groupId;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginRight: 10 }}>
          {"name"}
        </Text>
        <Button title={expanded ? "-" : "+"} onPress={toggleExpanded} />
      </View>
      {expanded && (
        <Text style={{ marginTop: 10, fontSize: 16 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat
        mauris eu nulla lobortis, ac elementum libero bibendum. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Nam consequat tortor velit, eu sollicitudin nulla laoreet sit
        amet. Aliquam vel hendrerit sapien. Vivamus ullamcorper gravida
        bibendum. Vivamus sed ex nibh. Proin vel metus ligula. Donec pretium
        ultricies feugiat. Nullam lacinia vel dolor non placerat. Sed laoreet
        scelerisque nisi a aliquet. Donec eget dui dictum, auctor elit eu,
        venenatis sapien. Duis ullamcorper euismod sapien, ac placerat quam
        imperdiet a. Duis aliquet eleifend vestibulum. Ut gravida, magna in
        vestibulum dignissim, tortor lorem euismod libero, ut malesuada mauris
        enim vel nisl.</Text>
      )}
      <ScrollView style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16 }}>
          
        </Text>
      </ScrollView>
    </View>
  );
};

export default TasksScreen;
