import { db } from "lib/firebase";
import { set, ref, update, get, remove } from "firebase/database";

type WriteProps = {
  path: string;
  data?: any;
};

const writeToDatabase = async ({ path, data }: WriteProps) => {
  try {
    await set(ref(db, path), data);
  } catch (error) {
    console.error(`WriteToDatabase | ${path} | ${error}`);
  }
};

const updateData = async ({ path, data }: WriteProps) => {
  try {
    await update(ref(db, path), data);
  } catch (error) {
    console.error(`updateData | ${path} | ${error}`);
  }
};

const removeData = async ({ path }: WriteProps) => {
  try {
    await remove(ref(db, path));
  } catch (error) {
    console.error(`removeData | ${path} | ${error}`);
  }
};

const getData = async (path: string) => {
  try {
    const snapshot = await get(ref(db, path));
    return snapshot.val();
  } catch (error) {
    console.error(`getData | ${path} | ${error}`);
  }
};

export { writeToDatabase, updateData, removeData, getData };
