import { addToDataBase, getIdByProperty } from "../persistance/FirebaseUtil";
import { User } from "../model/UserDTO";
import { Paths, PropertyNames } from "../constants";

export const addUserToDatabase = async(email: string) => {
  return await addToDataBase(Paths.USERS, createUser(email));
}

export const getUserIdByEmail = async(email: string) => {
  return await getIdByProperty(Paths.USERS, PropertyNames.EMAIL, email);
}

const createUser = (email: string): User => ({ email: email}); 