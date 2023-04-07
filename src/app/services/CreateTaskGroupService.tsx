import { TaskGroupDTO } from "../model/TaskGroupDTO";
import { TaskGroupTaskStageGroupDTO } from "../model/TaskGroupTaskStageGroupDTO";
import { addToDataBase, getAllByProperty } from "../persistance/FirebaseUtil";
import { Paths, PropertyNames } from "../constants";

export const createTaskGroup = async (
    name: string, 
    description: string, 
    userId: string) => {
    const newTaskGroup: TaskGroupDTO = createTaskGroupDTO(name, description, userId)

    return await addToDataBase(Paths.TASK_GROUP, newTaskGroup)
};

export const createTaskGroupTaskStageGroup = async(
    taskGroupId: string,
    stageGroupId: string) => {
    const newTaskGroupTaskStageGroup: TaskGroupTaskStageGroupDTO = createTaskGroupTaskStageGroupDTO(taskGroupId, stageGroupId);
    await addToDataBase(Paths.TASK_GROUP_STAGE_GROUP, newTaskGroupTaskStageGroup);
};

export const getAllStageGroupByUserId = async(userId: string) => {
    return await getAllByProperty(Paths.TASK_STAGE_GROUP, PropertyNames.USED_ID, userId)
};

const createTaskGroupDTO = (
    name: string, 
    description: string, 
    userId: string): TaskGroupDTO => ({
        name: name,
        description: description,
        userId: userId})

const createTaskGroupTaskStageGroupDTO = (          
    taskGroupId: string,
    stageGroupId: string): TaskGroupTaskStageGroupDTO => ({
        taskGroupId: taskGroupId,
        stageGroupId: stageGroupId
    })