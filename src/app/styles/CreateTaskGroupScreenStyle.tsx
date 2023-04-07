import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    dateContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    label: {
      fontWeight: "bold",
      marginRight: 10,
    },
    dropdownContainer: {
      width: '80%',
      height: 40,
      marginBottom: 20,
    },
    dropdown: {
      backgroundColor: '#fafafa',
    },
    dropdownList: {
      backgroundColor: '#fafafa',
    },
    dropdownItem: {
      justifyContent: 'flex-start',
    },
    createButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    createButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    taskStageInput: {
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      width: '80%',
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: '#A9A9A9',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    saveButton: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 10,
    },
    saveButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });