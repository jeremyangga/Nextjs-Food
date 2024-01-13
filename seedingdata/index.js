if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require('fs').promises;

const dataJson = require('../dbfood.json');
// console.log(dataJson.products);
// Replace the placeholder with your Atlas connection string
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

let db;

function getDb(){
    return db;
}

async function connect() {
  try {
    const database = client.db("FoodDb");
    db = database;
    console.log("success connect to mongo");
    return database;
  } catch(err){
    console.log(err, "error run in connection");
  }
}
connect().catch(console.dir);

async function seedData(){
  try {
    await client.connect();
    const collection = client.db("FoodDb").collection("Products");
    await collection.insertMany(dataJson.products);
    console.log('seeding completed');
  } catch (error) {
    console.log(error, '<-- error seeding data');
  }
}

async function dropData(){
  try {
    const collection = client.db("FoodDb").collection("Products");
    await collection.drop();
    console.log('drop completed');
  } catch (error) {
    console.log(error, '<-- error seeding data');
  }
}

dropData();
seedData();