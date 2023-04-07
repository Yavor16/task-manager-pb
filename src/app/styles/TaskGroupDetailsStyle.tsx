import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
    },
    taskStages: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    stage: {
      width: '48%',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
    },
    stageTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    stageDescription: {
      fontSize: 14,
    },
  });