// import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);
// console.log("loadEnvironment module is being executed");

// let conn;
// try {
//   conn = await client.connect();
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("hos08");

// export default db;
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

async function connectToDatabase() {
  const client = new MongoClient(connectionString);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    
    const db = client.db("hos08");
    
    // You can return the 'db' instance if needed
    return db;
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e; // Rethrow the error if needed
  } finally {
    // Close the MongoDB client when done
    await client.close();
  }
}

export default connectToDatabase;
