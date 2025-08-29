const { MongoClient } = require("mongodb");
async function main() {
  const url = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    const db = client.db("mydb");
    const usersCollection = db.collection("users");
    await usersCollection.insertMany([
      { name: "Alice", age: 28 },
      { name: "Bob", age: 34 },
      { name: "Charlie", age: 22 },
    ]);
    console.log("✅ Users inserted successfully");
    const users = await usersCollection.find({}).toArray();
    console.log("📋 Users:", users);
  } catch (err) {
    console.error("❌ An error occurred:", err);
  } finally {
    await client.close();
    console.log("🔌 Connection closed");
  }
}
main();
