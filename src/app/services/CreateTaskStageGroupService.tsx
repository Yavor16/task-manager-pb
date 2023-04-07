import { TaskStageDTO } from "../model/TaskStageDTO";
import { TaskStageGroupDTO } from "../model/TaskStageGroupDTO";
import { addToDataBase } from "../persistance/FirebaseUtil";
import { Paths } from "../constants";

export const createTaskStageGroup = async(taskStageGroupName: string, userId: string) => {
    const newTaskStageGroup = createTaskStageGroupDTO(taskStageGroupName, userId)
    return await addToDataBase(Paths.TASK_STAGE_GROUP, newTaskStageGroup);
}

export const createTaskStage = async(taskStageName: string, taskStageColor: string, taskStageGroupId: string) => {
    const newTaskStage = createTaskStageDTO(taskStageName, taskStageColor, taskStageGroupId);
    addToDataBase(Paths.TASK_STAGE, newTaskStage);
}

const createTaskStageDTO = (
  name: string,
  color: string,
  taskStageGroupId: string
): TaskStageDTO => ({
  name: name,
  color: color,
  taskStageGroupId: taskStageGroupId,
});

const createTaskStageGroupDTO = (
  taskStageGroupName: string,
  userId: string
): TaskStageGroupDTO => ({ name: taskStageGroupName, userId: userId });
