import { JSONFilePreset } from "lowdb/node";

type Data = {
  name: string;
  email: string;
  message: string;
}[];

export const getDB = async () => {
  const defaultData: Data = [];
  const db = await JSONFilePreset<Data>("db.json", defaultData);

  return db;
};
