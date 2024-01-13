import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGO_URI;
const DB_NAME = 'FoodDb';
if(!uri){
    throw new Error("please provide connection string");
}
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

export const db = client.db(DB_NAME);
export const getCollection = (collectionName: string) =>{
    return db.collection(collectionName);
}