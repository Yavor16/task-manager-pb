import { FIRESTORE_DB } from "./FirebaseInit";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const addToDataBase = async (
  path: string,
  data: object
): Promise<string> => {
  
  let id: string = "";
  await addDoc(collection(FIRESTORE_DB, path), data)
    .then((result) => {
      id = result.id;
    })
    .catch((error) => {
      console.error("Error adding data to database: ", error);
    });

  return id;
};

export const getIdByProperty = async (
  path: string,
  key: string,
  value: string) => {
  
  const querySnapshot = await executeGetAllQuery(path, key, value);

  return querySnapshot.docs[0];
};

export const getAllByProperty = async (
  path: string,
  key: string,
  value: string) => {
 
  const querySnapshot = await executeGetAllQuery(path, key, value);
  const tempDoc = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })

  return tempDoc
};

export const getAllFromCollection = async (
  path: string) => {
  const querySnapshot = await getDocs(collection(FIRESTORE_DB, path));

  const tempDoc = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
  return tempDoc;
};

const executeGetAllQuery = async (
  path: string,
  key: string,
  value: string) => {
  const firestoreCollection = collection(FIRESTORE_DB, path);
  const filteredQuery = await query(
    firestoreCollection,
    where(key, "==", value)
  );
  return await getDocs(filteredQuery);
};