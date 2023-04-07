import { getAllByProperty } from "../persistance/FirebaseUtil";
import { Paths, PropertyNames } from "../constants";
import { mapResultToTaskGroupsDTO } from "../mapper/TaskGroupsDTOMapper";
import { TaskGroupDTO } from "../model/TaskGroupDTO";

export const loadGroups = async (userId: string) => {
  let parsedResult: { id: string; taskGroup: TaskGroupDTO }[] = [];
  
  await getAllByProperty(
    Paths.TASK_GROUP,
    PropertyNames.USED_ID,
    userId
  ).then((results) => {
    if (results) {
      results.forEach((result) => {
        let tempTaskGroup: TaskGroupDTO = mapResultToTaskGroupsDTO(result);
        parsedResult.push({ id: result.id, taskGroup: tempTaskGroup });
      });
    }
  });

  return parsedResult;
};