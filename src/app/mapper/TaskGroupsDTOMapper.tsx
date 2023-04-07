import { TaskGroupDTO } from "../model/TaskGroupDTO";

export const mapResultToTaskGroupsDTO = (result: any): TaskGroupDTO => {
    return {
        userId: result["userId"],
        name: result["name"],
        description: result["description"]
    };
}